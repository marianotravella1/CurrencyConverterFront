import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyService } from '../../Services/currency.service';

@Component({
  selector: 'app-favorite-coins',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './favorite-coins.component.html',
  styleUrl: './favorite-coins.component.scss'
})
export class FavoriteCoinsComponent {
  currencyService = inject(CurrencyService);

}
