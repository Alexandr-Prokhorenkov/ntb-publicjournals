import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { PdfItem, PdfTableComponent } from '../pdf-table/pdf-table';

export interface YearInfo {
  year: number;
  subscription: boolean;
}

@Component({
  selector: 'app-year-section',
  imports: [SvgIconComponent, PdfTableComponent],
  templateUrl: './year-section.html',
  styleUrl: './year-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearSectionComponent {
  @Input({ required: true }) data!: YearInfo;

  private readonly _items = signal<PdfItem[]>([]);
  @Input({ required: true }) set items(val: PdfItem[] | null | undefined) {
    this._items.set(val ?? []);
  }
  itemsValue = () => this._items();

  private readonly _open = signal(false);
  @Input() set initiallyOpen(v: boolean | '' | null | undefined) {
    if (v !== undefined && v !== null) this._open.set(!!v);
  }

  isOpen = () => this._open();

  toggle(): void {
    this._open.update((v) => !v);
  }
}
