import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem } from '../../shared/ui/pdf-table/pdf-table';
import { YearInfo, YearSectionComponent } from '../../shared/ui/year-section/year-section';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';

@Component({
  selector: 'app-defense-enterprise',
  imports: [YearSectionComponent, ScrollUp],
  templateUrl: './defense-enterprise.component.html',
  styleUrl: './defense-enterprise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefenseEnterpriseComponent {
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
        file: 'ОКНТПР_В1-2025.pdf',
        info: 'ОКНТПР_В1-2025.pdf',
        sizeLabel: '316 КБ',
      },
      {
        title: 'Выпуск 2 - 2025 год',
        file: 'ОКНТПР_В2-2025.pdf',
        info: 'ОКНТПР_В2-2025.pdf',
        sizeLabel: '339 КБ',
      },
    ],
    2024: [
      {
        title: 'Выпуск 1 - 2024 год',
        file: 'ОКНТПР_В1-2024.pdf',
        info: 'ОКНТПР_В1-2024.pdf',
        sizeLabel: '354 КБ',
      },
      {
        title: 'Выпуск 2 - 2024 год',
        file: 'ОКНТПР_В2-2024.pdf',
        info: 'ОКНТПР_В2-2024.pdf',
        sizeLabel: '363 КБ',
      },
      {
        title: 'Выпуск 3 - 2024 год',
        file: 'ОКНТПР_В3-2024.pdf',
        info: 'ОКНТПР_В3-2024.pdf',
        sizeLabel: '361 КБ',
      },
      {
        title: 'Выпуск 4 - 2024 год',
        file: 'ОКНТПР_В4-2024.pdf',
        info: 'ОКНТПР_В4-2024.pdf',
        sizeLabel: '362 КБ',
      },
    ],
    2023: [
      {
        title: 'Выпуск 1 - 2023 год',
        file: 'ОКНТПР_В1-2023.pdf',
        info: 'ОКНТПР_В1-2023.pdf',
        sizeLabel: '4.1 МБ',
      },
      {
        title: 'Выпуск 2 - 2023 год',
        file: 'ОКНТПР_В2-2023.pdf',
        info: 'ОКНТПР_В2-2023.pdf',
        sizeLabel: '1.8 МБ',
      },
      {
        title: 'Выпуск 3 - 2023 год',
        file: 'ОКНТПР_В3-2023.pdf',
        info: 'ОКНТПР_В3-2023.pdf',
        sizeLabel: '1,7 МБ',
      },
      {
        title: 'Выпуск 4 - 2023 год',
        file: 'ОКНТПР_В4-2023.pdf',
        info: 'ОКНТПР_В4-2023.pdf',
        sizeLabel: '1.4 МБ',
      },
    ],
    2022: [
      {
        title: 'Выпуск 1 - 2022 год',
        file: 'ОКНТПР_В1-2022.pdf',
        info: 'ОКНТПР_В1-2022.pdf',
        sizeLabel: '1.6 МБ',
      },
      {
        title: 'Выпуск 2 - 2022 год',
        file: 'ОКНТПР_В2-2022.pdf',
        info: 'ОКНТПР_В2-2022.pdf',
        sizeLabel: '1.7 МБ',
      },
      {
        title: 'Выпуск 3 - 2022 год',
        file: 'ОКНТПР_В3-2022.pdf',
        info: 'ОКНТПР_В3-2022.pdf',
        sizeLabel: '1.6 МБ',
      },
      {
        title: 'Выпуск 4 - 2022 год',
        file: 'ОКНТПР_В4-2022.pdf',
        info: 'ОКНТПР_В4-2022.pdf',
        sizeLabel: '1.3 МБ',
      },
    ],
    2021: [
      {
        title: 'Выпуск 1 - 2021 год',
        file: 'ОКНТПР_В1-2021.pdf',
        info: 'ОКНТПР_В1-2021.pdf',
        sizeLabel: '1.6 МБ',
      },
      {
        title: 'Выпуск 2 - 2021 год',
        file: 'ОКНТПР_В2-2021.pdf',
        info: 'ОКНТПР_В2-2021.pdf',
        sizeLabel: '1.7 МБ',
      },
      {
        title: 'Выпуск 3 - 2021 год',
        file: 'ОКНТПР_В3-2021.pdf',
        info: 'ОКНТПР_В3-2021.pdf',
        sizeLabel: '1.8 МБ',
      },
      {
        title: 'Выпуск 4 - 2021 год',
        file: 'ОКНТПР_В4-2021.pdf',
        info: 'ОКНТПР_В4-2021.pdf',
        sizeLabel: '1.6 МБ',
      },
    ],
    2020: [
      {
        title: 'Выпуск 1 - 2020 год',
        file: 'ОКНТПР_В1-2020.pdf',
        info: 'ОКНТПР_В1-2020.pdf',
        sizeLabel: '1.7 МБ',
      },
      {
        title: 'Выпуск 2 - 2020 год',
        file: 'ОКНТПР_В2-2020.pdf',
        info: 'ОКНТПР_В2-2020.pdf',
        sizeLabel: '1.6 МБ',
      },
      {
        title: 'Выпуск 3 - 2020 год',
        file: 'ОКНТПР_В3-2020.pdf',
        info: 'ОКНТПР_В3-2020.pdf',
        sizeLabel: '1.8 МБ',
      },
      {
        title: 'Выпуск 4 - 2020 год',
        file: 'ОКНТПР_В4-2020.pdf',
        info: 'ОКНТПР_В4-2020.pdf',
        sizeLabel: '1.7 МБ',
      },
    ],
  };

  getDocs(year: number): PdfItem[] {
    return this.docsByYear[year] ?? [];
  }
}
