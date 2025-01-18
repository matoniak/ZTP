import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
import { GameRoomBookingService } from '@services/game-room-booking/game-room-booking.service';
import { RoomBookingItem } from '@shared/interfaces/room-booking.interface';
import { PricingPlans } from '@shared/enums/pricing-plans.enum';
import { BookedRoomsComponent } from '../booked-rooms/booked-rooms.component';
import { StateOption } from '@app/shared/interfaces/state-options.interface';

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
  selector: 'room-booking-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...primeNgModules, NgClass, ReactiveFormsModule, BookedRoomsComponent],
  templateUrl: './room-booking-form.component.html',
})
export class RoomBookingFormComponent implements OnInit {
  @Input() showBookPanel = false;

  @Output() cancel = new EventEmitter();

  value: number | undefined;

  bookings: RoomBookingItem[] = [];

  stateOptions: StateOption[] = [
    { label: 'Basic', value: 1 },
    { label: 'Premium', value: 2 },
    { label: 'Enterprise', value: 3 },
  ];

  readonly bookRoomForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    pricingPlans: new FormControl(undefined, Validators.required),
  });

  constructor(private gameRoomBookingService: GameRoomBookingService) {}

  ngOnInit() {
    this.bookings = [
      {
        id: '1',
        name: 'Jane',
        surname: 'Smith',
        email: 'jane.smith@example.com',
        startDate: '2025-01-01',
        endDate: '2025-12-31',
        pricingPlans: PricingPlans.BASIC,
      },
      {
        id: '2',
        name: 'Alice',
        surname: 'Johnson',
        email: 'alice.johnson@example.com',
        startDate: '2025-03-15',
        endDate: '2025-09-15',
        pricingPlans: PricingPlans.BASIC,
      },
      {
        id: '3',
        name: 'Clara',
        surname: 'Davis',
        email: 'clara.davis@example.com',
        startDate: '2025-05-01',
        endDate: '2025-11-01',
        pricingPlans: PricingPlans.PREMIUM,
      },
      {
        id: '4',
        name: 'David',
        surname: 'Miller',
        email: 'david.miller@example.com',
        startDate: '2025-06-01',
        endDate: '2025-12-01',
        pricingPlans: PricingPlans.ENTERPRISE,
      },
    ];
  }

  bookRoom() {
    if (!this.bookRoomForm.valid) return console.log('form not valid');

    const formValue: RoomBookingItem = this.bookRoomForm.value as RoomBookingItem;

    const payload: RoomBookingItem = {
      id: '1',
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
    // this.showBookPanel = true;
    // if (!this.bookRoomForm.valid) return console.log('form not valid');
    // const formValue: RoomBookingItem = this.bookRoomForm.value as RoomBookingItem;
    // const payload: RoomBookingItem = {
    //   name: this.bookRoomForm.patchValue(bookings.name),
    //   surname: formValue.surname,
    //   email: formValue.email,
    //   startDate: formValue.startDate,
    //   endDate: formValue.endDate,
    //   pricingPlans: this.setPlaningPlan(this.value) || undefined,
    // };
    // this.gameRoomBookingService.editBooking(payload).subscribe({
    //   next: response => {
    //     console.log('Booking successfully edited!', response);
    //     this.showBookPanel = false;
    //   },
    //   error: error => {
    //     console.error('Error occurred:', error);
    //   },
    // });
  }

  deleteRoom() {
    // this.gameRoomBookingService.deleteBookingById(id).subscribe({
    //   next: response => {
    //     console.log('Booking successfully Deleted!', response);
    //     this.showBookPanel = false;
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
