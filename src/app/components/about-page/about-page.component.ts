import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAIN_SLIDER_DATA } from '../../shared/configs/main-slider.config';
import { SliderComponent } from '../../shared/ui/slider/ui/slider.component';
import { SvgIconComponent } from '../../shared/ui/svg-icon/svg-icon.component';
import { PhotoCarouselComponent } from '../../shared/ui/photo-carousel/photo-carousel.component';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SliderComponent, SvgIconComponent, PhotoCarouselComponent, ScrollUp],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[0]];
}
