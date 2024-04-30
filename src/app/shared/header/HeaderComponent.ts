import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuRoutes } from '../../menu/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuItems: any[] = [];

  ngOnInit(): void {
    this.menuItems = MenuRoutes;
    throw new Error('Method not implemented.');
  }
}
