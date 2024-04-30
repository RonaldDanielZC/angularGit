import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { HeaderComponent } from './shared/header/HeaderComponent';
import { ArticuloComponent } from './pages/articulo/articulo.component';

export const routes: Routes = [
  {
    path: 'inicio',
    title: 'Home',
    children: [
      {
        path: '',
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: 'persona',
        title: 'personas',
        component: PersonaComponent,
      },
      {
        path: 'imagenes',
        title: 'Mis imagenes',
        component: ImagenesComponent,
      },
      {
        path: 'contacto',
        title: 'Mis imagenes',
        component: ContactoComponent,
      },
      {
        path: 'acercade',
        title: 'Quienes somos',
        component: AcercaDeComponent,
      },
      {
        path: 'header',
        title: 'header',
        component: HeaderComponent,
      },
      {
        path: 'articulo',
        title: 'articulo',
        component: ArticuloComponent,
      },
    ],
  },
];
