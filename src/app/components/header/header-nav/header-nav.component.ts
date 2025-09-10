import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from '../../../shared/ui/svg-icon/svg-icon.component';

export interface MenuItem {
  label: string;
  route: string;
  exact?: boolean;
  linkActiveOptions: { exact: boolean };
}

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterModule, CommonModule, SvgIconComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavComponent {
  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef<HTMLDialogElement>;
  public mobileOpen = false;
  openMobileMenu(): void {
    const dlg = this.mobileMenuRef?.nativeElement;
    if (dlg && !dlg.open) {
      dlg.showModal();
      this.mobileOpen = true;
    }
  }

  closeMobileMenu(): void {
    const dlg = this.mobileMenuRef?.nativeElement;
    if (dlg && dlg.open) {
      dlg.close();
      this.mobileOpen = false;
    }
  }

  onMobileCancel(e: Event): void {
    e.preventDefault();
    this.closeMobileMenu();
  }

  onDialogBackdropClick(e: MouseEvent): void {
    if (e.target === this.mobileMenuRef?.nativeElement) {
      this.closeMobileMenu();
    }
  }

  onDialogKeydown(e: KeyboardEvent): void {
    const dlg = this.mobileMenuRef?.nativeElement;
    if (!dlg) return;
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === dlg) {
      e.preventDefault();
      this.closeMobileMenu();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      this.closeMobileMenu();
    }
  }

  public readonly menuItems: MenuItem[] = [
    { label: 'О нас', route: '/', exact: true },
    { label: 'Научные журналы', route: '/journals' },
    { label: 'Аналитические журналы', route: '/analytics' },
    { label: 'Дайджесты', route: '/digests' },
    { label: 'Услуги', route: '/services' },
  ].map((item) => ({
    ...item,
    linkActiveOptions: { exact: !!item.exact },
  }));
}
