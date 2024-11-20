import { Injectable } from '@angular/core';
import { environment } from '../Environments/environment.development';
import { Subscription } from '../Interfaces/subscription';
import { UserDetails } from '../Interfaces/userDetails';

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
      environment.API_URL + 'User/Upgrade/' + subscriptionId,
      {
        method: 'PUT',
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
    console.log(res);
    if (res.status === 200) return true;
    else {
      return false
    }
  }
}
