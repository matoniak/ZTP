import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { PricingPlans } from '@app/shared/enums/pricing-plans.enum';
import { RoomBookingItem } from '@app/shared/interfaces/room-booking.interface';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'booked-rooms',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './booked-rooms.component.html',
})
export class BookedRoomsComponent {
  @Output() edit = new EventEmitter();

  @Output() delete = new EventEmitter();

  bookings: RoomBookingItem[] = [
    {
      name: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      startDate: '2025-01-01',
      endDate: '2025-12-31',
      pricingPlans: PricingPlans.BASIC,
    },
    {
      name: 'Alice',
      surname: 'Johnson',
      email: 'alice.johnson@example.com',
      startDate: '2025-03-15',
      endDate: '2025-09-15',
      pricingPlans: PricingPlans.BASIC,
    },
    {
      name: 'Clara',
      surname: 'Davis',
      email: 'clara.davis@example.com',
      startDate: '2025-05-01',
      endDate: '2025-11-01',
      pricingPlans: PricingPlans.PREMIUM,
    },
    {
      name: 'David',
      surname: 'Miller',
      email: 'david.miller@example.com',
      startDate: '2025-06-01',
      endDate: '2025-12-01',
      pricingPlans: PricingPlans.ENTERPRISE,
    },
  ];
}
