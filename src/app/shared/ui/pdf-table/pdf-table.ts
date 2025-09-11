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
  AfterViewInit,
} from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import dialogPolyfill from 'dialog-polyfill';
import 'dialog-polyfill/dialog-polyfill.css';

export interface PdfItem {
  title: string;
  file: string;
  info?: string;
  sizeLabel?: string;
}

interface PdfRow {
  idx: number;
  title: string;
  info: string;
  sizeLabel: string;
  url: string;
}

@Component({
  selector: 'app-pdf-table',
  imports: [CommonModule, SvgIconComponent, NgxExtendedPdfViewerModule],
  templateUrl: './pdf-table.html',
  styleUrl: './pdf-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfTableComponent implements AfterViewInit {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() set items(value: PdfItem[] | null) {
    const list = value ?? [];
    this.rows.set(
      list.map((it, i) => ({
        idx: i + 1,
        title: it.title,
        info: it.info ?? 'Описание содержания файла',
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

  ngAfterViewInit() {
    const dlg = this.previewDialog.nativeElement;
    if (!('showModal' in dlg)) {
      dialogPolyfill.registerDialog(dlg);
    }
  }

  public trackByIdx(_: number, r: PdfRow): number {
    return r.idx;
  }

  private canInlinePdf(): boolean {
    const ua = navigator.userAgent || '';
    const touchPoints = (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints ?? 0;

    const isIOS =
      /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && touchPoints > 1);

    const isOldAndroid = /Android/.test(ua) && !/Chrome|Firefox/.test(ua);
    return !(isIOS || isOldAndroid);
  }

  view(row: PdfRow) {
    if (!this.canInlinePdf()) {
      window.open(row.url, '_blank', 'noopener,noreferrer');
      return;
    }
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
