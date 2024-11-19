import { Injectable } from '@angular/core';
import { environment } from '../Environments/environment.development';
import { Login, ResLogin } from '../Interfaces/login';
import { SignUp } from '../Interfaces/sign-up';
import { UserDetails } from '../Interfaces/userDetails';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  logueado?: ResLogin | null = null; 

  constructor() {}

  // Método para iniciar sesión
  async login(loginData: Login): Promise<boolean> {
    try {
      // Realizar solicitud al backend
      const response = await fetch(`${environment.API_URL}Authenticate/Authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( loginData ) // Enviar credenciales en el cuerpo de la solicitud
      });

      if (response.status === 200) {
        const resJson = await response.json();
        const token = resJson.token; 
        
        localStorage.setItem('authToken', token);
        
        this.logueado = this.parseJwt(token);

        return true;
      } else {
        console.error('Autenticación fallida');
        return false;
      }
    } catch (error) {
      console.error('Error en el proceso de autenticación:', error);
      return false;
    }
  }

  // Método para decodificar el JWT y obtener los datos del usuario
  private parseJwt(token: string): any {
    const payloadBase64 = token.split('.')[1];
    const payloadJson = atob(payloadBase64);
    return JSON.parse(payloadJson);
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken'); 
    this.logueado = null; 
  }

  async SignUp(signUpData: SignUp): Promise<boolean> {
    try {
      const response = await fetch(`${environment.API_URL}User/SignUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( signUpData )
      });
      console.log(response);

      if (response.status === 204) {
        return true;
      } else {
        console.error('Error al crear un user');
        return false;
      }
    } catch (error) {
      console.error('Error en el proceso de creación de usuario:', error);
      return false;
    }
  }
}
