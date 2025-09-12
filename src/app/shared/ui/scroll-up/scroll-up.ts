import { ChangeDetectionStrategy, Component, HostListener, signal, OnInit } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './scroll-up.html',
  styleUrl: './scroll-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollUp implements OnInit {
  private readonly bottomThreshold = 8;
  readonly visible = signal(false);

  ngOnInit() {
    this.updateVisibility();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange() {
    requestAnimationFrame(() => this.updateVisibility());
  }

  private updateVisibility() {
    const docEl = document.documentElement;
    const bottomGap = docEl.scrollHeight - (window.scrollY + window.innerHeight);
    this.visible.set(bottomGap <= this.bottomThreshold);
  }

  scrollToTop() {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }
}
