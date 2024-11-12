import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencyService } from '../../Services/currency.service';
import { Currency } from '../../Interfaces/currency';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  currencyService = inject(CurrencyService);

  CurrencyName(currency: Currency)
  {
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

  
  errorLogin = false;

  async Result(converterForm: NgForm) {
    const {amount, from, to} = converterForm.value;
    const converterData = {amount, from, to};
    
    console.log(converterData);
  }
}
