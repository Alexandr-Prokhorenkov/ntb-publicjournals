import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgIconRegistryService } from '../../lib/svg-icon-registry.service';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input() public set name(value: string) {
    this.svg = this.registry.getIcon(value);
  }
  @Input() public class = '';
  public svg: SafeHtml = '';
  private registry = inject(SvgIconRegistryService);
}
