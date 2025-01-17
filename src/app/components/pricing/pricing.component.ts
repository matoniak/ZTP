import { RoomBookingFormComponent } from '../room-booking-form/room-booking-form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BookedRoomsComponent } from '../booked-rooms/booked-rooms.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonModule,
    RoomBookingFormComponent,
    FormsModule,
    ReactiveFormsModule,
    BookedRoomsComponent,
    CardModule,
  ],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  showBookPanel = false;
}
