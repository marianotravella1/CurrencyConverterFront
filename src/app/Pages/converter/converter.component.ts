import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
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
}
