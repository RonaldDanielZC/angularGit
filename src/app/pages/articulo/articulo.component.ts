import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent {
  nombrevideo: string = 'bucles';
}
