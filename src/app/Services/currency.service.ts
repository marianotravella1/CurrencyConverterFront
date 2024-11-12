import { Injectable } from '@angular/core';
import { Currency } from '../Interfaces/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currencies: Currency[] = [
    {
      legend: 'US Dollar',
      code: 'USD',
      symbol: '$',
      convertibilityIndex: '1',
      isFavorite: true,
    },
    {
      legend: 'Argentine Peso',
      code: 'ARS',
      symbol: '$',
      convertibilityIndex: '0.002',
      isFavorite: true,
    },
    {
      legend: 'Euro',
      code: 'EUR',
      symbol: '€',
      convertibilityIndex: '1.09',
      isFavorite: true,
    },
    {
      legend: 'British Pound',
      code: 'GBP',
      symbol: '£',
      convertibilityIndex: '1.1',
      isFavorite: true,
    },
  ];

  constructor() {}
}
