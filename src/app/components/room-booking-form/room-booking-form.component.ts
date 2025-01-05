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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { CardModule } from 'primeng/card';

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
  ],
  templateUrl: './room-booking-form.component.html',
})
export class RoomBookingFormComponent {
  showBookPanel = input(false);

  @Input() bookRoomFormName!: FormControl;

  @Input() bookRoomFormSurname!: FormControl;

  @Input() bookRoomFormStartDate!: FormControl;

  @Input() bookRoomFormEndDate!: FormControl;

  @Output() save = new EventEmitter<void>();

  @Output() cancel = new EventEmitter<void>();

  value: number | undefined = undefined;

  paymentOptions: any[] = [
    { name: 'Basic', value: 1 },
    { name: 'Premium', value: 2 },
    { name: 'Enterprise', value: 3 },
  ];
}
