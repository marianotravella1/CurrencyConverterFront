import { Injectable } from '@angular/core';
import { Conversions } from '../Interfaces/conversions';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  conversions: Conversions[] = [
    {
      conversionDate: new Date("2024-11-08T10:33:46.873Z"),
      sourceCurrency: 'ARS',
      targetCurrency: 'USD',
      convertedAmount: '500'
    },{
      conversionDate: new Date("2024-11-08T16:33:46.873Z"),
      sourceCurrency: 'ARS',
      targetCurrency: 'USD',
      convertedAmount: '500'
    },
    {
      conversionDate: new Date("2024-11-08T08:33:46.873Z"),
      sourceCurrency: 'ARS',
      targetCurrency: 'USD',
      convertedAmount: '500'
    },
    {
      conversionDate: new Date("2024-11-08T00:00:46.873Z"),
      sourceCurrency: 'ARS',
      targetCurrency: 'USD',
      convertedAmount: '500'
    },
  ]

  constructor() { }
}
