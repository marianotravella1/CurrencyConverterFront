import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthenticationService);
  router = inject(Router);

  errorLogin = false;
  async login(loginForm: NgForm) {
    const { username, password } = loginForm.value;
    const loginData = { username, password };

    const res = await this.authService.login(loginData);

    if (res) {
      this.router.navigate(['/converter']);
    } else {
      this.errorLogin = true;
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'Invalid username or password',
        timer: 3000,
      });
    }
  }
}
