import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';

@Component({
  selector: 'app-aviation',
  imports: [PdfTableComponent],
  templateUrl: './aviation.component.html',
  styleUrl: './aviation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AviationComponent {
  readonly aviationsDocs: PdfItem[] = [
    {
      title: '"Авиастроение - 1.2025"',
      file: 'Д-АВИАСТРОЕНИЕ-2025.pdf',
      info: 'Д-АВИАСТРО/НИЕ-2025.pdf',
      sizeLabel: '1.8 МБ',
    },
  ];
}
