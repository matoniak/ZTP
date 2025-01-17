import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { StyleClassModule } from 'primeng/styleclass';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StyleClassModule, RouterModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
