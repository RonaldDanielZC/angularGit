import { Component } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  abrirModal() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'error',
    });
  }
}
