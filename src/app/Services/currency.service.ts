import { Injectable } from '@angular/core';
import { Currency } from '../Interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencies: Currency[] = 
  [{
    legend: "US Dollar",
    code: 'USD',
    symbol: '$',
    convertibilityIndex: '1',
    isFavorite: true
  },
  {
    legend: "US Dollar",
    code: 'USD',
    symbol: '$',
    convertibilityIndex: '1',
    isFavorite: true
  },
  {
    legend: "US Dollar",
    code: 'USD',
    symbol: '$',
    convertibilityIndex: '1',
    isFavorite: true
  },
  {
    legend: "US Dollar",
    code: 'USD',
    symbol: '$',
    convertibilityIndex: '1',
    isFavorite: true
  },
  
]

  constructor() { }
}
