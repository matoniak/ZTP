import { ChangeDetectionStrategy, Component, Input, OnChanges, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { BookRoomForm } from 'src/app/interfaces/book-room.interface';

@Component({
  selector: 'booking-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SelectButtonModule, ButtonModule, InputTextModule, CheckboxModule],
  templateUrl: './booking-panel.component.html',
})
export class BookingPanelComponent implements OnChanges {
  showBookPanel = input(false);

  //bookRoomForm: BookRoomForm;

  value: number | undefined = undefined;

  paymentOptions: any[] = [
    { name: 'Basic', value: 1 },
    { name: 'Premium', value: 2 },
    { name: 'Enterprise', value: 3 },
  ];

  ngOnChanges() {
    //console.log('1', this.bookRoomForm);
  }
}
