import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  errorRegister = false;
  authService = inject(AuthenticationService)
  router = inject(Router)

  async signUp(registerForm: NgForm){
    const {username, name, email, password, subscription} = registerForm.value;
    const registerData = {username, name, email, password, subscription};
    
    const res = await this.authService.signUp(registerData)

    if(res?.statusText === "Created") {
      this.router.navigate(['/login']).then(() => {
        //Swal.fire("Registro exitoso", "", "success");
        console.log("Registro exitoso");
      })
    } else this.errorRegister = true;
  }
}
