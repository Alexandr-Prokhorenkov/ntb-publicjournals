import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBlockComponent {
  @Input() public title!: string;
  @Input() public imageSrc!: string;
  @Input() public imageAlt = '';
  @Input() public subtitle!: string;
  @Input() public text!: string;
  @Input() public mode: 'mission' | 'history' = 'mission';
}
