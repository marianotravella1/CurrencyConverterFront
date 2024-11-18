import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
      this.showUpgradeMembershipAlert();
    }
  }

  // Función para mostrar la alerta
  showUpgradeMembershipAlert() {
    Swal.fire({
      title: 'You’ve reached your conversion limit!',
      html: `
      <p>Select a new membership to get more conversions:</p>
      <div style="display: flex; justify-content: space-around; gap: 10px; margin-top: 20px;">
        <!-- Card 1 -->
        <div class="membership-card" style="text-align: center; padding: 10px; border: 1px solid #ccc; border-radius: 10px; width: 30%;">
          <h3>Free</h3>
          <p>10 conversions/month</p>
          <button class="membership-btn" data-plan="Free" style="background: #ccc; padding: 5px 10px; border-radius: 5px; border: none;">Choose</button>
        </div>
        <!-- Card 2 -->
        <div class="membership-card" style="text-align: center; padding: 10px; border: 1px solid #007bff; border-radius: 10px; width: 30%; background: #f0f8ff;">
          <h3>Pro</h3>
          <p>100 conversions/month</p>  
          <button class="membership-btn" data-plan="Pro" style="background: #007bff; color: white; padding: 5px 10px; border-radius: 5px; border: none;">Choose</button>
        </div>
        <!-- Card 3 -->
        <div class="membership-card" style="text-align: center; padding: 10px; border: 1px solid #28a745; border-radius: 10px; width: 30%; background: #e9f7ef;">
          <h3>Premium</h3>
          <p>Unlimited conversions</p>
          <button class="membership-btn" data-plan="Premium" style="background: #28a745; color: white; padding: 5px 10px; border-radius: 5px; border: none;">Choose</button>
        </div>
      </div>
    `,
      showConfirmButton: false, // Ocultamos los botones predeterminados
      showCloseButton: true, // Permite cerrar la alerta con un botón de cierre
      didRender: () => {
        // Agregar eventos a los botones dinámicamente
        const buttons = document.querySelectorAll('.membership-btn');
        buttons.forEach((button) => {
          button.addEventListener('click', (e) => {
            const target = e.target as HTMLButtonElement;
            const plan = 'PRO';
            Swal.fire({
              title: `You selected the ${plan} plan!`,
              icon: 'success',
              confirmButtonText: 'Okay',
            }).then(() => {
              // Aquí puedes enviar la solicitud para cambiar de plan
              console.log(`Changing to ${plan} plan...`);
            });
          });
        });
      },
    });
  }
}
