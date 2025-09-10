import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
  signal,
  computed,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

export interface PdfItem {
  title: string;
  file: string;
  uploadedAt?: string | Date;
  info?: string;
  sizeLabel?: string;
}

interface PdfRow {
  idx: number;
  title: string;
  info: string;
  uploadedAtLabel: string;
  sizeLabel: string;
  url: string;
}

@Component({
  selector: 'app-pdf-table',
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './pdf-table.html',
  styleUrl: './pdf-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfTableComponent {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() set items(value: PdfItem[] | null) {
    const list = value ?? [];
    this.rows.set(
      list.map((it, i) => ({
        idx: i + 1,
        title: it.title,
        info: it.info ?? 'Описание содержания файла',
        uploadedAtLabel: this.formatDate(it.uploadedAt),
        sizeLabel: it.sizeLabel ?? '—',
        url: this.resolveUrl(it.file),
      })),
    );
  }

  @Input() basePath = 'assets/docs/';
  rows = signal<PdfRow[]>([]);
  hasRows = computed(() => this.rows().length > 0);

  selected: PdfRow | null = null;
  safeUrl: SafeResourceUrl | null = null;

  @ViewChild('previewDialog', { static: true }) previewDialog!: ElementRef<HTMLDialogElement>;

  public trackByIdx(_: number, r: PdfRow): number {
    return r.idx;
  }

  view(row: PdfRow) {
    this.selected = row;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(row.url);
    this.previewDialog.nativeElement.showModal();
    document.body.style.overflow = 'hidden';
  }

  closePreview() {
    this.previewDialog.nativeElement.close();
    document.body.style.overflow = '';
    this.selected = null;
    this.safeUrl = null;
  }

  download(row: PdfRow) {
    const a = document.createElement('a');
    a.href = row.url;
    a.download = `${row.title}.pdf`;
    a.click();
  }

  private resolveUrl(file: string): string {
    if (/^https?:\/\//i.test(file)) return file;
    const f = file.startsWith('/') ? file.slice(1) : file;
    if (f.startsWith('assets/')) return f;
    const base = this.basePath.endsWith('/') ? this.basePath : this.basePath + '/';
    return base + f;
  }

  private formatDate(input?: string | Date): string {
    if (!input) return '—';
    const d = typeof input === 'string' ? new Date(input) : input;
    if (isNaN(d as unknown as number)) return String(input);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  }

  public onDialogBackdropClick(e: MouseEvent): void {
    const dlg = this.previewDialog.nativeElement;
    if (e.target === dlg) this.closePreview();
  }

  public onDialogBackdropKey(): void {
    this.closePreview();
  }

  public onDialogCancel(e: Event): void {
    e.preventDefault();
    this.closePreview();
  }
}
