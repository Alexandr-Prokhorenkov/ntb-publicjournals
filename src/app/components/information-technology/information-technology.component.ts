import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem } from '../../shared/ui/pdf-table/pdf-table';
import { YearInfo, YearSectionComponent } from '../../shared/ui/year-section/year-section';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';

@Component({
  selector: 'app-information-technology',
  imports: [YearSectionComponent, ScrollUp],
  templateUrl: './information-technology.component.html',
  styleUrl: './information-technology.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationTechnologyComponent {
  readonly yearsData: YearInfo[] = [
    { year: 2025, subscription: true },
    { year: 2024, subscription: true },
    { year: 2023, subscription: false },
    { year: 2022, subscription: false },
    { year: 2021, subscription: false },
    { year: 2020, subscription: false },
  ];

  readonly docsByYear: Record<number, PdfItem[]> = {
    2025: [],
    2024: [
      {
        title: 'Выпуск 1 - 2024 год',
        file: 'ИТПП_В1-2024.pdf',
        info: 'ИТПП_В1-2024.pdf',
        sizeLabel: '372 КБ',
      },
      {
        title: 'Выпуск 2 - 2024 год',
        file: 'ИТПП_В2-2024.pdf',
        info: 'ИТПП_В2-2024.pdf',
        sizeLabel: '371 КБ',
      },
      {
        title: 'Выпуск 3 - 2024 год',
        file: 'ИТПП_В3-2024.pdf',
        info: 'ИТПП_В3-2024.pdf',
        sizeLabel: '374 КБ',
      },
      {
        title: 'Выпуск 4 - 2024 год',
        file: 'ИТПП_В4-2024.pdf',
        info: 'ИТПП_В4-2024.pdf',
        sizeLabel: '204 КБ',
      },
    ],
    2023: [
      {
        title: 'Выпуск 1 - 2023 год',
        file: 'ИТПП_В1-2023.pdf',
        info: 'ИТПП_В1-2023.pdf',
        sizeLabel: '1.9 МБ',
      },
      {
        title: 'Выпуск 2 - 2023 год',
        file: 'ИТПП_В2-2023.pdf',
        info: 'ИТПП_В2-2023.pdf',
        sizeLabel: '1.7 МБ',
      },
      {
        title: 'Выпуск 3 - 2023 год',
        file: 'ИТПП_В3-2023.pdf',
        info: 'ИТПП_В3-2023.pdf',
        sizeLabel: '1.7 МБ',
      },
      {
        title: 'Выпуск 4 - 2023 год',
        file: 'ИТПП_В4-2023.pdf',
        info: 'ИТПП_В4-2023.pdf',
        sizeLabel: '1.7 МБ',
      },
    ],
    2022: [
      {
        title: 'Выпуск 1 - 2022 год',
        file: 'ИТПП_В1-2022.pdf',
        info: 'ИТПП_В1-2022.pdf',
        sizeLabel: '2.7 МБ',
      },
      {
        title: 'Выпуск 2 - 2022 год',
        file: 'ИТПП_В2-2022.pdf',
        info: 'ИТПП_В2-2022.pdf',
        sizeLabel: '1.8 МБ',
      },
      {
        title: 'Выпуск 3 - 2022 год',
        file: 'ИТПП_В3-2022.pdf',
        info: 'ИТПП_В3-2022.pdf',
        sizeLabel: '1.8 МБ',
      },
      {
        title: 'Выпуск 4 - 2022 год',
        file: 'ИТПП_В4-2022.pdf',
        info: 'ИТПП_В4-2022.pdf',
        sizeLabel: '2.0 МБ',
      },
    ],
    2021: [
      {
        title: 'Выпуск 1 - 2021 год',
        file: 'ИТПП_В1-2021.pdf',
        info: 'ИТПП_В1-2021.pdf',
        sizeLabel: '1.7 МБ',
      },
      {
        title: 'Выпуск 2 - 2021 год',
        file: 'ИТПП_В2-2021.pdf',
        info: 'ИТПП_В2-2021.pdf',
        sizeLabel: '2.1 МБ',
      },
      {
        title: 'Выпуск 3 - 2021 год',
        file: 'ИТПП_В3-2021.pdf',
        info: 'ИТПП_В3-2021.pdf',
        sizeLabel: '1.7 МБ',
      },
      {
        title: 'Выпуск 4 - 2021 год',
        file: 'ИТПП_В4-2021.pdf',
        info: 'ИТПП_В4-2021.pdf',
        sizeLabel: '1.5 МБ',
      },
    ],
    2020: [
      {
        title: 'Выпуск 1 - 2020 год',
        file: 'ИТПП_В1-2020.pdf',
        info: 'ИТПП_В1-2020.pdf',
        sizeLabel: '2.0 МБ',
      },
      {
        title: 'Выпуск 2 - 2020 год',
        file: 'ИТПП_В2-2020.pdf',
        info: 'ИТПП_В2-2020.pdf',
        sizeLabel: '2.0 МБ',
      },
      {
        title: 'Выпуск 3 - 2020 год',
        file: 'ИТПП_В3-2020.pdf',
        info: 'ИТПП_В3-2020.pdf',
        sizeLabel: '2.7 МБ',
      },
      {
        title: 'Выпуск 4 - 2020 год',
        file: 'ИТПП_В4-2020.pdf',
        info: 'ИТПП_В4-2020.pdf',
        sizeLabel: '1.6 МБ',
      },
    ],
  };

  getDocs(year: number): PdfItem[] {
    return this.docsByYear[year] ?? [];
  }
}
