import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencyService } from '../../Services/currency.service';
import { Currency } from '../../Interfaces/currency';
import { ConversionService } from '../../Services/conversion.service';
import { CalcConversion } from '../../Interfaces/conversions';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class ConverterComponent {
  currencyService = inject(CurrencyService);
  conversionService = inject(ConversionService);

  CurrencyName(currency: Currency) {
    return currency.code + ' - ' + currency.legend;
  }

  validateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Reemplazar comas por puntos (si se prefiere solo un separador decimal)
    value = value.replace(',', '.');

    // Permitir solo números y un solo punto decimal
    if (!/^\d*\.?\d*$/.test(value)) {
      value = value.slice(0, -1); // Elimina el último caracter si no es válido
    }

    // Asigna el valor validado al input
    input.value = value;
  }

  errorConversion = false;
  resultConversion: number | string = "";

  async ConverterFormData(converterForm: NgForm) {
    const { convertedAmount, sourceCurrencyCode, targetCurrencyCode } =
      converterForm.value;
    const converterData: CalcConversion = {
      convertedAmount,
      sourceCurrencyCode,
      targetCurrencyCode,
    };

    const res = await this.conversionService.convertCurrency(converterData);
    this.resultConversion = res;
  }
}
