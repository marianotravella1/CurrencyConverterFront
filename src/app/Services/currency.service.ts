import { Injectable } from '@angular/core';
import { Currency } from '../Interfaces/currency';
import { environment } from '../Environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  
  constructor() {
    this.loadData()
   }

  async loadData() {
    await this.getCurrencies()
  }

  currencies: Currency[] = []

  async getCurrencies(){
    const res = await fetch(environment.API_URL+'Currency',{
      headers: {
        authorization:'Bearer '+localStorage.getItem("authToken")
      },
    })
    if(res.status !== 200) return;
    const resJson:Currency[] = await res.json();
    this.currencies = resJson;
  }
}
