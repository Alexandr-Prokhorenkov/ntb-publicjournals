import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SliderComponent } from '../../shared/ui/slider/ui/slider.component';
import { MAIN_SLIDER_DATA } from '../../shared/configs/main-slider.config';
import { MENU_ANALITICS_JOURNALS_ICONS } from '../../shared/configs/scientific-journals.config';
import { MenuItemsComponent } from '../../shared/ui/menu-item/menu-item';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [SliderComponent, MenuItemsComponent, RouterOutlet],
  templateUrl: './analytics-page.component.html',
  styleUrl: './analytics-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[2]];
  public readonly menuAnaliticsJournalsIcons = MENU_ANALITICS_JOURNALS_ICONS;
}
