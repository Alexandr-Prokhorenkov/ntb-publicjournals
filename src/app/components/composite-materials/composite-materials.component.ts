import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem } from '../../shared/ui/pdf-table/pdf-table';
import { YearInfo, YearSectionComponent } from '../../shared/ui/year-section/year-section';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';

@Component({
  selector: 'app-composite-materials',
  imports: [YearSectionComponent, ScrollUp],
  templateUrl: './composite-materials.component.html',
  styleUrl: './composite-materials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompositeMaterialsComponent {
  readonly yearsData: YearInfo[] = [
    { year: 2025, subscription: true },
    { year: 2024, subscription: true },
    { year: 2023, subscription: false },
    { year: 2022, subscription: false },
    { year: 2021, subscription: false },
    { year: 2020, subscription: false },
  ];

  readonly docsByYear: Record<number, PdfItem[]> = {
    2025: [
      {
        title: 'Выпуск 1 - 2025 год',
        file: 'КМ_В1-2025.pdf',
        info: 'КМ_В1-2025.pdf',
        sizeLabel: '2 МБ',
      },
      {
        title: 'Выпуск 2 - 2025 год',
        file: 'КМ_В2-2025.pdf',
        info: 'КМ_В2-2025.pdf',
        sizeLabel: '1.9 МБ',
      },
    ],
    2024: [
      {
        title: 'Выпуск 1 - 2024 год',
        file: 'КМ_В1-2024.pdf',
        info: 'КМ_В1-2024.pdf',
        sizeLabel: '2 МБ',
      },
      {
        title: 'Выпуск 2 - 2024 год',
        file: 'КМ_В2-2024.pdf',
        info: 'КМ_В2-2024.pdf',
        sizeLabel: '2 МБ',
      },
      {
        title: 'Выпуск 3 - 2024 год',
        file: 'КМ_В3-2024.pdf',
        info: 'КМ_В3-2024.pdf',
        sizeLabel: '2 МБ',
      },
      {
        title: 'Выпуск 4 - 2024 год',
        file: 'КМ_В4-2024.pdf',
        info: 'КМ_В4-2024.pdf',
        sizeLabel: '2 МБ',
      },
    ],
    2023: [
      {
        title: 'Выпуск 1 - 2023 год',
        file: 'КМ_В1-2023.pdf',
        info: 'КМ_В1-2023.pdf',
        sizeLabel: '3.3 МБ',
      },
      {
        title: 'Выпуск 2 - 2023 год',
        file: 'КМ_В2-2023.pdf',
        info: 'КМ_В2-2023.pdf',
        sizeLabel: '3.4 МБ',
      },
      {
        title: 'Выпуск 3 - 2023 год',
        file: 'КМ_В3-2023.pdf',
        info: 'КМ_В3-2023.pdf',
        sizeLabel: '2.1 МБ',
      },
      {
        title: 'Выпуск 4 - 2023 год',
        file: 'КМ_В4-2023.pdf',
        info: 'КМ_В4-2023.pdf',
        sizeLabel: '3.2 МБ',
      },
    ],
    2022: [
      {
        title: 'Выпуск 1 - 2022 год',
        file: 'КМ_В1-2022.pdf',
        info: 'КМ_В1-2022.pdf',
        sizeLabel: '3.8 МБ',
      },
      {
        title: 'Выпуск 2 - 2022 год',
        file: 'КМ_В2-2022.pdf',
        info: 'КМ_В2-2022.pdf',
        sizeLabel: '3.3 МБ',
      },
      {
        title: 'Выпуск 3 - 2022 год',
        file: 'КМ_В3-2022.pdf',
        info: 'КМ_В3-2022.pdf',
        sizeLabel: '3.3 МБ',
      },
      {
        title: 'Выпуск 4 - 2022 год',
        file: 'КМ_В4-2022.pdf',
        info: 'КМ_В4-2022.pdf',
        sizeLabel: '3.8 МБ',
      },
    ],
    2021: [
      {
        title: 'Выпуск 1 - 2021 год',
        file: 'КМ_В1-2021.pdf',
        info: 'КМ_В1-2021.pdf',
        sizeLabel: '3 МБ',
      },
      {
        title: 'Выпуск 2 - 2021 год',
        file: 'КМ_В2-2021.pdf',
        info: 'КМ_В2-2021.pdf',
        sizeLabel: '3.3 МБ',
      },
      {
        title: 'Выпуск 3 - 2021 год',
        file: 'КМ_В3-2021.pdf',
        info: 'КМ_В3-2021.pdf',
        sizeLabel: '3.9 МБ',
      },
      {
        title: 'Выпуск 4 - 2021 год',
        file: 'КМ_В4-2021.pdf',
        info: 'КМ_В4-2021.pdf',
        sizeLabel: '3.4 МБ',
      },
    ],
    2020: [
      {
        title: 'Выпуск 1 - 2020 год',
        file: 'КМ_В1-2020.pdf',
        info: 'КМ_В1-2020.pdf',
        sizeLabel: '3.7 МБ',
      },
      {
        title: 'Выпуск 2 - 2020 год',
        file: 'КМ_В2-2020.pdf',
        info: 'КМ_В2-2020.pdf',
        sizeLabel: '3.6 МБ',
      },
      {
        title: 'Выпуск 3 - 2020 год',
        file: 'КМ_В3-2020.pdf',
        info: 'КМ_В3-2020.pdf',
        sizeLabel: '3.7 МБ',
      },
      {
        title: 'Выпуск 4 - 2020 год',
        file: 'КМ_В4-2020.pdf',
        info: 'КМ_В4-2020.pdf',
        sizeLabel: '4.1 МБ',
      },
    ],
  };

  getDocs(year: number): PdfItem[] {
    return this.docsByYear[year] ?? [];
  }
}
