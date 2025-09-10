import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAIN_SLIDER_DATA } from '../../shared/configs/main-slider.config';
import { SliderComponent } from '../../shared/ui/slider/ui/slider.component';
import { MenuItemCard, MenuItemsComponent } from '../../shared/ui/menu-item/menu-item';
import { Router, RouterOutlet } from '@angular/router';
import { MENU_JOURNALS_ICONS } from '../../shared/configs/scientific-journals.config';

@Component({
  selector: 'app-journals-page',
  standalone: true,
  imports: [SliderComponent, MenuItemsComponent, RouterOutlet],
  templateUrl: './journals-page.component.html',
  styleUrl: './journals-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JournalsPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[1]];
  public readonly menuJournalsIcons = MENU_JOURNALS_ICONS;
  private readonly router = inject(Router);

  public onTopRequestsClick(item: MenuItemCard): void {
    if (!item?.disabled) this.router.navigate([item.routerLink]);
  }
}
