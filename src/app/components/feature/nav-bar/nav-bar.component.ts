import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
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
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@app/services/user/user.service';
import { Image } from 'primeng/image';

const primeNgModules = [
  MenubarModule,
  BadgeModule,
  AvatarModule,
  AvatarGroupModule,
  MenuModule,
  ButtonModule,
  Image,
];

@Component({
  selector: 'nav-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...primeNgModules, StyleClassModule, NgClass, RouterModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  isUserAuthorized = false;

  isUserLoggedIn = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = navbarLinks;

    this.userService.isUserAuthorizedState$.subscribe(value => (this.isUserAuthorized = value));
  }

  signOut() {
    this.isUserAuthorized = false;

    this.router.navigate(['/authorize']);
  }
}
