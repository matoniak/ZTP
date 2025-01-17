import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { AuthComponent } from '@pages/auth/auth.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

const pageTitle = 'Game bar';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: `${pageTitle} | Home` },
  { path: 'authorize', component: AuthComponent, title: `${pageTitle} | Sign in` },
  { path: '**', component: NotFoundComponent, title: `${pageTitle} | Not found` },
];
