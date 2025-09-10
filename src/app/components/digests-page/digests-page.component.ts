import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SliderComponent } from '../../shared/ui/slider/ui/slider.component';
import { MAIN_SLIDER_DATA } from '../../shared/configs/main-slider.config';
import { MenuItemsComponent } from '../../shared/ui/menu-item/menu-item';
import { RouterOutlet } from '@angular/router';
import { MENU_DIGESTS_ICONS } from '../../shared/configs/scientific-journals.config';

@Component({
  selector: 'app-digests-page',
  standalone: true,
  imports: [SliderComponent, MenuItemsComponent, RouterOutlet],
  templateUrl: './digests-page.component.html',
  styleUrl: './digests-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigestsPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[3]];
  public readonly menuDigestsIcons = MENU_DIGESTS_ICONS;
}
