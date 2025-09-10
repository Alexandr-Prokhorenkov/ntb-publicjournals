import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
