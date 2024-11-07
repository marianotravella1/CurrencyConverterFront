import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggleNav() {
    const toggleButton = document.getElementById('nav-toggle');
    const menu = document.getElementById('menu');

    if (toggleButton && menu) {
      menu.style.left = '100%'; 

      const toggleMenu = (): void => {
        if (menu.style.left === '0px') {
          menu.style.left = '100%'; 
        } else {
          menu.style.left = '0'; 
        }
      };

      toggleButton.addEventListener('click', toggleMenu);

     
    }
  }
}
