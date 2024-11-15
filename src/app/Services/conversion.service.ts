import { inject, Injectable } from '@angular/core';
import { environment } from '../Environments/environment.development';
import { CurrencyService } from './currency.service';
import { CalcConversion, Conversion } from '../Interfaces/conversions';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  currencyService = inject(CurrencyService);
  conversions: Conversion[] = [];

  constructor() {
    this.loadData();
  }

  async loadData() {
    await this.getConversions();
  }

  async getConversions() {
    const res = await fetch(environment.API_URL + 'Conversion', {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    if (res.status !== 200) return;
    const resJson = await res.json();

    console.log(resJson);
    this.conversions = resJson;
  }

  async convertCurrency(formData: CalcConversion) {
    try {
      const response = await fetch(
        `${environment.API_URL}Conversion/CalculateConversion`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + localStorage.getItem('authToken'),
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        const resJson = await response.json();

        return resJson;
      } else {
        console.error('Conversion fallida');
        return false;
      }
    } catch (error) {
      console.error('Error en el proceso de conversión:', error);
      return false;
    }
  }
}
