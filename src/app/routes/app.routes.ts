import { Routes } from '@angular/router';

const pageTitle = 'Game bar';

export const routes: Routes = [
  {
    path: 'home',
    title: `${pageTitle} | Home`,
    loadComponent: () => import('@pages/home/home.component').then(m => m.HomePageComponent),
  },
  {
    path: 'authorize',
    title: `${pageTitle} | Sign in`,
    loadComponent: () => import('@pages/auth/auth.component').then(m => m.AuthPageComponent),
  },
  {
    path: '**',
    title: `${pageTitle} | Not found`,
    loadComponent: () =>
      import('@pages/not-found/not-found.component').then(m => m.NotFoundPageComponent),
  },
];
