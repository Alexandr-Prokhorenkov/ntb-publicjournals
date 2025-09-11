import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { SliderComponent } from '../../shared/ui/slider/ui/slider.component';
import { MAIN_SLIDER_DATA } from '../../shared/configs/main-slider.config';
import { SvgIconComponent } from '../../shared/ui/svg-icon/svg-icon.component';
import { OurServiceCardComponent } from '../../shared/ui/our-service-card/our-service-card.component';

interface ServiceItem {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [SliderComponent, SvgIconComponent, OurServiceCardComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[4]];

  services: ServiceItem[] = [
    {
      icon: 'strategy',
      title: 'Стратегия',
      text: 'Разработка долгосрочных стратегий развития отраслей промышленности.',
    },
    {
      icon: 'analize-promka',
      title: 'Анализ технологий',
      text: 'Анализ перспективных промышленных технологий.',
    },
    {
      icon: 'estimation-effective',
      title: 'Оценка разработок',
      text: 'Оценка эффективности инновационных разработок.',
    },
    { icon: 'market-analize', title: 'Анализ рынков', text: 'Анализ отраслевых рынков.' },
    {
      icon: 'scientific-research',
      title: 'Научные исследования',
      text: 'Проведение научно-исследовательских работ.',
    },
    {
      icon: 'analitic-report',
      title: 'Аналитические отчеты',
      text: 'Подготовка аналитических отчетов.',
    },
    { icon: 'industrial-survey', title: 'Обзоры', text: 'Создание отраслевых обзоров.' },
    { icon: 'data-base', title: 'Базы данных', text: 'Формирование баз данных.' },
    { icon: 'monitoring', title: 'Мониторинг', text: 'Мониторинг отраслевых трендов.' },
    { icon: 'big-date', title: 'Большие данные', text: 'Сбор и анализ больших данных.' },
    {
      icon: 'info-analitics',
      title: 'Информационное сопровождение',
      text: 'Информационно-аналитическое сопровождение НИОКР.',
    },
    { icon: 'development', title: 'Разработка ПО', text: 'Разработка программного обеспечения.' },
  ];

  @ViewChild('contacts') private contactsRef!: ElementRef<HTMLElement>;

  scrollToContacts(): void {
    this.contactsRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
