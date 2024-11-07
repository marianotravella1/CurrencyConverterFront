import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private isMenuOpen: boolean = false;

  toggleMenu(): void {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      this.isMenuOpen = !this.isMenuOpen;
      navMenu.style.left = this.isMenuOpen ? '0' : '100%';
    }
  }

  closeMenu(): void {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      this.isMenuOpen = false;
      navMenu.style.left = '100%';
    }
  }
}
