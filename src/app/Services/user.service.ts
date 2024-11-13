import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { environment } from '../Environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor() {}

  async getUsers() {
    try {
      const response = await fetch(`${environment.API_URL}User`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
