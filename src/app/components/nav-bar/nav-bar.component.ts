import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule, MenubarModule, BadgeModule, StyleClassModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'About us',
        icon: 'pi pi-star',
      },
      {
        label: 'join us',
        icon: 'pi pi-star',
      },
      {
        label: 'Offer',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Pricing',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
      {
        label: 'FAQ',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
