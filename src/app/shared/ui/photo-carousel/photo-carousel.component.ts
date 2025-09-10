import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  Signal,
  computed,
  signal,
} from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './photo-carousel.component.html',
  styleUrl: './photo-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCarouselComponent {
  @Input({ required: true }) images: string[] = [];

  @Input() loop = true;

  @Input() viewportHeight = '360px';

  @Input() animationMs = 400;

  @Input() ariaLabel = 'Фотогалерея';

  readonly index = signal(0);

  readonly canPrev: Signal<boolean> = computed(() => this.loop || this.index() > 0);
  readonly canNext: Signal<boolean> = computed(
    () => this.loop || this.index() < Math.max(0, this.images.length - 1),
  );

  readonly translateX: Signal<string> = computed(() => `translateX(-${this.index() * 100}%)`);

  readonly transition: Signal<string> = computed(() => `transform ${this.animationMs}ms ease`);

  next(): void {
    if (!this.images?.length) return;
    if (this.index() >= this.images.length - 1) {
      if (this.loop) this.index.set(0);
    } else {
      this.index.update((v) => v + 1);
    }
  }

  prev(): void {
    if (!this.images?.length) return;
    if (this.index() <= 0) {
      if (this.loop) this.index.set(this.images.length - 1);
    } else {
      this.index.update((v) => v - 1);
    }
  }

  goTo(i: number): void {
    if (!this.images?.length) return;
    const max = this.images.length - 1;
    const clamped = Math.min(Math.max(i, 0), max);
    this.index.set(clamped);
  }

  @HostListener('keydown', ['$event'])
  onKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'ArrowRight') {
      ev.preventDefault();
      this.next();
    } else if (ev.key === 'ArrowLeft') {
      ev.preventDefault();
      this.prev();
    }
  }

  private dragStartX: number | null = null;
  private dragging = false;

  onPointerDown(e: PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.dragStartX = e.clientX;
    this.dragging = true;
  }

  onPointerMove(e: PointerEvent) {
    void e;
    if (!this.dragging || this.dragStartX === null) return;
  }

  onPointerUp(e: PointerEvent) {
    if (!this.dragging || this.dragStartX === null) return;
    const dx = e.clientX - this.dragStartX;
    const threshold = 40;
    if (dx <= -threshold) this.next();
    if (dx >= threshold) this.prev();
    this.dragStartX = null;
    this.dragging = false;
  }
}
