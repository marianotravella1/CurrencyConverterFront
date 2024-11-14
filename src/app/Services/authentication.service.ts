import { Injectable } from '@angular/core';
import { environment } from '../Environments/environment.development';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  usuario: any = null; // Aquí se almacenará la información del usuario autenticado

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

      // Verificar si la autenticación fue exitosa
      if (response.status === 200) {
        const resJson = await response.json();
        const token = resJson.token; // Suponiendo que el token está en `resJson.token`

        // Guardar el token en localStorage para persistencia
        localStorage.setItem('authToken', token);

        // Decodificar y almacenar la información del usuario
        this.usuario = this.parseJwt(token);

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
    localStorage.removeItem('authToken'); // Eliminar el token de almacenamiento
    this.usuario = null; // Borrar datos del usuario en memoria
  }
}
