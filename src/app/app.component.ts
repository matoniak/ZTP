import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { PrimeNG } from 'primeng/config';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    StyleClassModule,
    ButtonModule,
    AccordionModule,
    OverlayBadgeModule,
    Image,
  ],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private primeng: PrimeNG) {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.primeng.ripple.set(true);

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
