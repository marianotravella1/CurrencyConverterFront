import { Injectable } from '@angular/core';
import { Subscription } from '../Interfaces/subscription';
import { SignUp } from '../Interfaces/sign-up';
import { environment } from '../Environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor() {
    this.loadData();
  }

  async loadData() {
    await this.getSubscriptions();
  }

  subscriptions: Subscription[] = [];

  async getSubscriptions() {
    const res = await fetch(environment.API_URL + 'Subscription', {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    if (res.status !== 200) return;
    const resJson: Subscription[] = await res.json();
    this.subscriptions = resJson;
  }

  
  
}
