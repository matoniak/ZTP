import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { NgClass, NgIf } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'nav-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StyleClassModule, MenubarModule, BadgeModule, NgClass],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        href: 'home',
        icon: 'pi pi-home',
      },
      {
        label: 'About us',
        href: 'about-us',
        icon: 'pi pi-star',
      },
      {
        label: 'Join us',
        href: 'join-us',
        icon: 'pi pi-star',
      },
      {
        label: 'Our offer',
        href: 'our-offer',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Pricing plans',
        href: 'pricing-plans',
        icon: 'pi pi-envelope',
      },
      {
        label: 'FAQ',
        href: 'faq',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
