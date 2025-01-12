import { RoomBookingFormComponent } from '../room-booking-form/room-booking-form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, RoomBookingFormComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  showBookPanel = false;
}
