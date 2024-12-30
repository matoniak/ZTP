import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { StyleClassModule } from 'primeng/styleclass';

import { HomePageComponent } from './pages/home-page/home-page.component';

const pagesComponents = [HomePageComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StyleClassModule, ...pagesComponents],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
