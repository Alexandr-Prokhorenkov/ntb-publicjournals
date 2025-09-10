import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-our-service-card',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './our-service-card.component.html',
  styleUrl: './our-service-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServiceCardComponent {
  @Input() iconName!: string;
  @Input() title!: string;
  @Input() text!: string;

  @Output() cardClick = new EventEmitter<void>();

  onClick() {
    this.cardClick.emit();
  }
}
