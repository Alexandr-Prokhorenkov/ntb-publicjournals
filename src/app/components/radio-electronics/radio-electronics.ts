import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';

@Component({
  selector: 'app-radio-electronics',
  imports: [PdfTableComponent],
  templateUrl: './radio-electronics.html',
  styleUrl: './radio-electronics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioElectronicsComponent {
  readonly radioElectronicsDocs: PdfItem[] = [
    {
      title: 'Оптика, фотоника и лазерные технологии - 2025 ',
      file: 'ИБ-ОПТИКА-2025.pdf',
      info: 'ИБ-ОПТИКА-2025.pdf',
      sizeLabel: '786 КБ',
    },
  ];
}
