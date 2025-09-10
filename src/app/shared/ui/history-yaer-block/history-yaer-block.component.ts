import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-yaer-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-yaer-block.component.html',
  styleUrl: './history-yaer-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryYaerBlockComponent {
  @Input() public year: number | string = '';
  @Input() public title = '';
  @Input() public text = '';
  @Input() public reverse = false;
  @Input() public yearOpacity = 1;
}
