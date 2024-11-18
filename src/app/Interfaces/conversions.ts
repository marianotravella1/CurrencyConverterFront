export interface CalcConversion {
  sourceCurrencyId: number,
  targetCurrencyId: number,
  convertedAmount: string
}

export interface Conversion {
  conversionDate: any,
  sourceCurrency: any,
  targetCurrency: any,
  convertedAmount: number,
  convertedOutput: number,
}
