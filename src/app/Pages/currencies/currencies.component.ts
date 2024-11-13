import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyService } from '../../Services/currency.service';

@Component({
  selector: 'app-currencies',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.scss'
})
export class CurrenciesComponent {
  currencyService = inject(CurrencyService);

}
