import { Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home/home.component';
import { AuthPageComponent } from '@pages/auth/auth.component';
import { NotFoundPageComponent } from '@pages/not-found/not-found.component';

const pageTitle = 'Game bar';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: `${pageTitle} | Home` },
  { path: 'authorize', component: AuthPageComponent, title: `${pageTitle} | Sign in` },
  { path: '**', component: NotFoundPageComponent, title: `${pageTitle} | Not found` },
];
