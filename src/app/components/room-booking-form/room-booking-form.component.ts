import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { CardModule } from 'primeng/card';
import { GameRoomBookingService } from '@services/game-room-booking.service';
import { RoomBookingItem } from '@shared/interfaces/room-booking.interface';
import { PricingPlans } from '@shared/enums/pricing-plans.enum';
import { BookedRoomsComponent } from '../booked-rooms/booked-rooms.component';

const primeNgModules = [
  SelectButtonModule,
  ButtonModule,
  InputTextModule,
  CheckboxModule,
  FormsModule,
  DatePickerModule,
  CardModule,
];

@Component({
  selector: 'booking-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...primeNgModules,
    ReactiveFormsModule,
    NgClass,
    ReactiveFormsModule,
    BookedRoomsComponent,
  ],
  templateUrl: './room-booking-form.component.html',
})
export class RoomBookingFormComponent {
  @Input() showBookPanel = false;

  @Output() cancel = new EventEmitter();

  value: number | undefined;

  stateOptions: any[] = [
    { label: 'Basic', value: 1 },
    { label: 'Premium', value: 2 },
    { label: 'Enterprise', value: 3 },
  ];

  readonly bookRoomForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    pricingPlans: new FormControl(undefined, Validators.required),
  });

  constructor(private gameRoomBookingService: GameRoomBookingService) {}

  bookRoom() {
    if (this.bookRoomForm.valid) return console.log('form not valid');

    const formValue: RoomBookingItem = this.bookRoomForm.value as RoomBookingItem;

    const payload: RoomBookingItem = {
      name: formValue.name,
      surname: formValue.surname,
      email: formValue.email,
      startDate: formValue.startDate,
      endDate: formValue.endDate,
      pricingPlans: this.setPlaningPlan(this.value) || undefined,
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

  editRoom() {
    this.showBookPanel = true;

    if (this.bookRoomForm.valid) return console.log('form not valid');

    // const payload: RoomBookingItem = {
    //   name: this.bookRoomForm.patchValue()
    //   surname: this.bookRoomForm.patchValue()
    //   email: this.bookRoomForm.patchValue()
    //   startDate: this.bookRoomForm.patchValue()
    //   endDate: this.bookRoomForm.patchValue()
    //   pricingPlans: this.bookRoomForm.patchValue()
    // };

    // this.gameRoomBookingService.editBooking(id).subscribe({
    //   next: response => {
    //     console.log('Booking successfully edited!', response);
    //   },
    //   error: error => {
    //     console.error('Error occurred:', error);
    //   },
    // });
  }

  deleteRoom() {
    this.showBookPanel = true;

    // this.gameRoomBookingService.deleteBookingById(id).subscribe({
    //   next: response => {
    //     console.log('Booking successfully Deleted!', response);
    //   },
    //   error: error => {
    //     console.error('Error occurred:', error);
    //   },
    // });
  }

  private setPlaningPlan(value: number | undefined) {
    if (value === 1) return PricingPlans.BASIC;
    if (value === 2) return PricingPlans.PREMIUM;
    if (value === 3) return PricingPlans.ENTERPRISE;

    return undefined;
  }
}
