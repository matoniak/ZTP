import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() bookings: RoomBookingItem[] = [];

  @Output() edit = new EventEmitter();

  @Output() delete = new EventEmitter();
}
