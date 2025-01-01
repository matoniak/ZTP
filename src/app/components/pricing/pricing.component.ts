import { BookingPanelComponent } from './../booking-panel/booking-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, CheckboxModule, InputTextModule, BookingPanelComponent],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  showBookPanel = false;
}
