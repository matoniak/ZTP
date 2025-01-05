import { RoomBookingFormComponent } from '../room-booking-form/room-booking-form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RoomBookingItem } from 'src/app/interfaces/room-booking.interface';
import { GameRoomBookingService } from 'src/app/services/game-room-booking.service';

@Component({
  selector: 'pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, RoomBookingFormComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  showBookPanel = false;

  readonly bookRoomForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
  });

  constructor(private gameRoomBookingService: GameRoomBookingService) {}

  onBookRoom() {
    if (this.bookRoomForm.valid) return console.log('form not valid');

    const formValue: RoomBookingItem = this.bookRoomForm.value as RoomBookingItem;

    const payload: RoomBookingItem = {
      name: formValue.name,
      surname: formValue.surname,
      startDate: formValue.startDate,
      endDate: formValue.endDate,
    };

    this.gameRoomBookingService.addBooking(payload).subscribe({
      next: response => {
        console.log('Form successfully submitted!', response);
      },
      error: error => {
        console.error('Error occurred:', error);
      },
    });
  }
}
