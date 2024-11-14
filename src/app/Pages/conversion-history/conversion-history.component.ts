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

  formatDate(fechaIso: any)
  {
    const fecha = new Date(fechaIso);
    const fechaArgentina = fecha.toLocaleDateString("es-AR");
    return fechaArgentina;
  }

  formatHour(isoDate: string): string {
    const date = new Date(isoDate);
    
    // Get hours and minutes in 2-digit format (e.g., 08:05)
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes}`;
  }

}
