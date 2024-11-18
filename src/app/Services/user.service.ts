import { Injectable } from '@angular/core';
import { UserDetails } from '../Interfaces/user';
import { environment } from '../Environments/environment.development';
import { Subscription } from '../Interfaces/subscription';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: UserDetails[] = [];
  userDetails: UserDetails | undefined;

  constructor() {
    this.laodData();
  }

  async laodData() {
    this.getUserDetails();
  }

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

  async getUserDetails() {
    try {
      const response = await fetch(`${environment.API_URL}User/UserDetails`, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      });
      const userDetails = response.json();

      console.log(userDetails);
      return userDetails;
    } catch {
      console.error('Error fetching userDetails:');
      return false;
    }
  }

  async UpgradeSubscriptionById(subscriptionId: number) {
    const res = await fetch(
      environment.API_URL + 'Subscription/' + subscriptionId,
      {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
    if (res.status !== 200) return;
    else {
      console.log('Subscription Upgraded');
    }
  }
}
