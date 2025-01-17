import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'booked-rooms',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule],
  templateUrl: './booked-rooms.component.html',
})
export class BookedRoomsComponent {}
