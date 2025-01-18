import { RoomBookingFormComponent } from '@components-feat/room-booking-form/room-booking-form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

const primeNgModules = [ButtonModule, FormsModule, CardModule];

@Component({
  selector: 'pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...primeNgModules, RoomBookingFormComponent, ReactiveFormsModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  showBookPanel = false;
}
