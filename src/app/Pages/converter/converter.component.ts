import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CurrencyService } from '../../Services/currency.service';
import { Currency } from '../../Interfaces/currency';
import { ConversionService } from '../../Services/conversion.service';
import { CalcConversion } from '../../Interfaces/conversions';
import { SubscriptionService } from '../../Services/subscription.service';
import { UserService } from '../../Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class ConverterComponent {
  currencyService = inject(CurrencyService);
  subscriptionService = inject(SubscriptionService);
  conversionService = inject(ConversionService);
  userService = inject(UserService);
  router = inject(Router);

  CurrencyName(currency: Currency) {
    return currency.code + ' - ' + currency.legend;
  }

  validateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    value = value.replace(',', '.');
    if (!/^\d*\.?\d*$/.test(value)) {
      value = value.slice(0, -1);
    }
    input.value = value;
  }

  errorConversion = false;
  resultConversion: number | null = null;

  async ConverterFormData(converterForm: NgForm) {
    const { convertedAmount, sourceCurrencyId, targetCurrencyId } =
      converterForm.value;
    const converterData: CalcConversion = {
      convertedAmount,
      sourceCurrencyId,
      targetCurrencyId,
    };
    this.resultConversion = null;

    const res = await this.conversionService.convertCurrency(converterData);

    if (res !== null) {
      this.resultConversion = res;
      this.conversionService.loadData();
    } else {
      this.router.navigate(['/upgrade-subscription']);

      this.showUpgradeMembershipAlert();
      
    }
  }

  // Función para mostrar la alerta
  showUpgradeMembershipAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You’ve reached your conversion limit!',
    });
  }
}
