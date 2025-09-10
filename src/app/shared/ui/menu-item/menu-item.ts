import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  NgZone,
  Output,
  signal,
} from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, switchMap, take } from 'rxjs/operators';
import { ScrollMemoryService } from '../../lib/scroll-memory.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface MenuItemCard {
  id: number;
  type: string;
  title: string;
  routerLink: string;
  iconName?: string;
  imageUrl?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [SvgIconComponent, RouterModule],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemsComponent {
  private readonly _items = signal<MenuItemCard[]>([]);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  public activeById: Record<number, boolean> = {};

  private _initialActiveId: number | null = null;
  private _initialApplied = false;

  @Input() defaultVariant: 'icon' | 'image' = 'icon';

  @Input() set initialActiveId(value: number | null | undefined) {
    this._initialActiveId = value ?? null;
    this.applyInitialIfPossible();
  }

  public get items(): MenuItemCard[] {
    return this._items();
  }

  @Input() public set items(value: MenuItemCard[] | null | undefined) {
    this._items.set(value ?? []);
    this.applyInitialIfPossible();
    if (!this._initialApplied) {
      this.recalcActiveById();
    }
  }

  @Output() public cardClick = new EventEmitter<MenuItemCard>();

  private readonly ngZone = inject(NgZone);

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        // ждём, пока Angular дорисует новый роут и все микротаски завершатся
        switchMap(() => this.ngZone.onStable.pipe(take(1))),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        const y = this.scrollMem.consume();
        // избегаем лишнего скролла на 0–1px, который даёт «дёрг»
        if (y != null && Math.abs((window.scrollY ?? 0) - y) > 1) {
          window.scrollTo({ top: y, behavior: 'auto' });
        }
        this.recalcActiveById();
      });
  }
  private applyInitialIfPossible(): void {
    if (this._initialApplied) return;
    if (this._initialActiveId == null) return;

    const list = this._items();
    if (!list.length) return;

    const exists = list.some((it) => it.id === this._initialActiveId);
    if (!exists) return;

    const map: Record<number, boolean> = {};
    for (const it of list) map[it.id] = false;
    map[this._initialActiveId] = true;

    this.activeById = map;
    this._initialApplied = true;
  }

  private recalcActiveById(): void {
    const url = this.router.url;
    const map: Record<number, boolean> = {};
    for (const it of this._items()) {
      map[it.id] = url.startsWith(it.routerLink);
    }
    this.activeById = map;
  }

  public onCardClick(e: MouseEvent, item: MenuItemCard): void {
    if (item.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.scrollMem.snapshot();
    this.cardClick.emit(item);
  }

  public onKeydown(e: KeyboardEvent, item: MenuItemCard): void {
    if (item.disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.scrollMem.snapshot();
      this.router.navigate([item.routerLink], { queryParamsHandling: 'preserve' });
    }
  }

  private readonly scrollMem = inject(ScrollMemoryService);

  public onLinkClick(e: MouseEvent, item: MenuItemCard): void {
    if (item.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.scrollMem.snapshot();
  }
}
