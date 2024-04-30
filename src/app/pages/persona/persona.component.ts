import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent {
  mostrarTitulo: boolean = false;
  personas = [
    {
      nombre: 'Danielo',
      edad: 15,
      ciudad: 'Bogotá',
      documento: 1545,
    },
    {
      nombre: 'Alejandro',
      edad: 15,
      ciudad: 'Cali',
      documento: 1545,
    },
    {
      nombre: 'Pablo',
      edad: 15,
      ciudad: 'Barranquilla',
      documento: 1545,
    },
    {
      nombre: 'Mayerli',
      edad: 15,
      ciudad: 'Leticia',
      documento: 1545,
    },
    {
      nombre: 'Jeronimo',
      edad: 15,
      ciudad: 'Cartagena',
      documento: 1545,
    },
    {
      nombre: 'Dora',
      edad: 15,
      ciudad: 'Bogotá',
      documento: 1545,
    },
    {
      nombre: 'Rocio',
      edad: 15,
      ciudad: 'Manizales',
      documento: 1545,
    },
    {
      nombre: 'Rocio',
      edad: 15,
      ciudad: 'Mocoa',
      documento: 1545,
    },
    {
      nombre: 'Edna',
      edad: 15,
      ciudad: 'Medellin',
      documento: 1545,
    },
    {
      nombre: 'Paulina',
      edad: 15,
      ciudad: 'Valledupar',
      documento: 1545,
    },
  ];
}
