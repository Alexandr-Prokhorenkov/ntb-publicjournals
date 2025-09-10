import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MAIN_SLIDER_DATA } from '../../shared/configs/main-slider.config';
import { SliderComponent } from '../../shared/ui/slider/ui/slider.component';
import { PdfItem } from '../../shared/ui/pdf-table/pdf-table';
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

  readonly docs = signal<PdfItem[]>([
    {
      title: 'FileName 1',
      file: 'example-1.pdf',
      uploadedAt: '2025-08-20',
      info: 'Описание содержания файла',
      sizeLabel: '1.2 МБ',
    },
    {
      title: 'FileName 2',
      file: 'example-2.pdf',
      uploadedAt: '2025-08-20',
      info: 'Описание содержания файла',
      sizeLabel: '1.2 МБ',
    },
  ]);

  public onTopRequestsClick(item: MenuItemCard): void {
    if (!item?.disabled) this.router.navigate([item.routerLink]);
  }
}
