import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'pricing',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {}
