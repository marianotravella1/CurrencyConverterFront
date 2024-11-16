export interface CalcConversion {
  sourceCurrencyCode: string,
  targetCurrencyCode: string,
  convertedAmount: string
}

export interface Conversion {
  conversionDate: any,
  sourceCurrency: any,
  targetCurrency: any,
  convertedAmount: number,
  convertedOutput: number,
}
