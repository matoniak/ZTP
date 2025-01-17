import { LanguageSwitcherComponent } from './../language-switcher/language-switcher.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { NgClass } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { navbarLinks } from '@app/shared/constants/nav-bar-items';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

const primeNgModules = [
  MenubarModule,
  BadgeModule,
  AvatarModule,
  AvatarGroupModule,
  MenuModule,
  ButtonModule,
];

@Component({
  selector: 'nav-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...primeNgModules, StyleClassModule, NgClass, RouterModule, LanguageSwitcherComponent],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  isUserAuthorized = false;

  isUserLoggedIn = false;

  ngOnInit() {
    this.items = navbarLinks;
  }
}
