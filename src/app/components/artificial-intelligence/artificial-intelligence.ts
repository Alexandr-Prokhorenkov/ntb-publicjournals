import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';

@Component({
  selector: 'app-artificial-intelligence',
  imports: [PdfTableComponent],
  templateUrl: './artificial-intelligence.html',
  styleUrl: './artificial-intelligence.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtificialIntelligenceComponent {
  readonly aiDocs: PdfItem[] = [
    {
      title: 'Достижения в области ИИ и обработки сигналов - 2025 ',
      file: 'ИБ-ИИ-2025.pdf',
      info: 'ИБ-ИИ-2025.pdf',
      sizeLabel: '766 КБ',
    },
    {
      title: 'ИИ в медицине и здравоохранении - 2025 ',
      file: 'ИБ-ИИ-МЕДИЦИНА.pdf',
      info: 'ИБ-ИИ-МЕДИЦИНА.pdf',
      sizeLabel: '617 КБ',
    },
  ];
}
