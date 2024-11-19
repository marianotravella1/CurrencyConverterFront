import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { SignUp } from '../../Interfaces/sign-up';
import { SubscriptionService } from '../../Services/subscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  errorRegister = false;
  authService = inject(AuthenticationService);
  router = inject(Router);
  subscriptionService = inject(SubscriptionService);

  errorSignUp = false;
  async signUp(registerForm: NgForm) {
    const { name, username, password, email, subscriptionId } =
      registerForm.value;
    const signUpData: SignUp = {
      name,
      username,
      password,
      email,
      subscriptionId,
    };
    const res = await this.authService.SignUp(signUpData);

    if (res) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User created successfuly",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/login']);
    } else {
      this.errorSignUp = true;
      Swal.fire({
        icon: 'error',
        title: 'Sign Up Error',
        text: '',
        timer: 3000,
      });
    }
  }
}
