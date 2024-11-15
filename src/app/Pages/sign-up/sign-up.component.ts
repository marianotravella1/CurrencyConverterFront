import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { SignUp } from '../../Interfaces/sign-up';
import { SubscriptionService } from '../../Services/subscription.service';

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
    const { name, username, password, email, subscriptionName } =
      registerForm.value;
    const signUpData: SignUp = {
      name,
      username,
      password,
      email,
      subscriptionName,
    };
    const res = await this.authService.SignUp(signUpData);

    if (res) {
      console.log("UserCreatedSuccessfuly");
      this.router.navigate(['/login']);
    } else this.errorSignUp = true;
  }
}
