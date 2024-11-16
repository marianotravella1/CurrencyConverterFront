import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { environment } from '../Environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  userDetails: User | undefined;

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

  async getUserDetails()
  {
    try {
      const response = await fetch(`${environment.API_URL}User/UserDetails`, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      });
      const userDetails = response.json();
      
      console.log(userDetails);
      return userDetails;
    }
    catch
    {
      console.error('Error fetching userDetails:');
      return false;
    }
  }
}