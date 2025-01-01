import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { StyleClassModule } from 'primeng/styleclass';

import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StyleClassModule, HomePageComponent],
  template: `<home-page />`,
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
