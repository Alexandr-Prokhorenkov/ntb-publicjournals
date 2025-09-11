import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';

@Component({
  selector: 'app-space-forces',
  imports: [PdfTableComponent],
  templateUrl: './space-forces.component.html',
  styleUrl: './space-forces.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceForcesComponent {
  readonly navalDocs: PdfItem[] = [
    {
      title: '"Ракетостроение - 3.2025"',
      file: 'Д-РАКЕТНАЯ-2025.pdf',
      info: 'Д-РАКЕТНАЯ-2025.pdf',
      sizeLabel: '1.4 МБ',
    },
  ];
}
