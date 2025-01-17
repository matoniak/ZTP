import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  input,
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
import { GameRoomBookingService } from '@services/game-room-booking.service';
import { RoomBookingItem } from '@shared/interfaces/room-booking.interface';
import { PricingPlans } from '@shared/enums/pricing-plans.enum';

@Component({
  selector: 'booking-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SelectButtonModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    NgClass,
    DatePickerModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './room-booking-form.component.html',
})
export class RoomBookingFormComponent {
  showBookPanel = input(false);

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

  private setPlaningPlan(value: number | undefined) {
    if (value === 1) return PricingPlans.BASIC;
    if (value === 2) return PricingPlans.PREMIUM;
    if (value === 3) return PricingPlans.ENTERPRISE;

    return undefined;
  }
}
