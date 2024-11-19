import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService = inject(AuthenticationService);
  private isMenuOpen: boolean = false;

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDarkMode(): void {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Guardar preferencia en localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
  }

  ngOnInit(): void {
    // Restaurar preferencia al cargar la página
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  }
}
