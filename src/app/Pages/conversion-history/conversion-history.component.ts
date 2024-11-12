import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConversionService } from '../../Services/conversion.service';

@Component({
  selector: 'app-conversion-history',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './conversion-history.component.html',
  styleUrl: './conversion-history.component.scss'
})
export class ConversionHistoryComponent {
  conversionService = inject(ConversionService);

  formatTime(date: Date)
  {
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const time = hours +':'+ minutes;
    return time;
  }

}
