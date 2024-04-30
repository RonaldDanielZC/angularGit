import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { HeaderComponent } from './shared/header/HeaderComponent';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  mostrarTitulo: boolean = false;
  personas = [];
}
