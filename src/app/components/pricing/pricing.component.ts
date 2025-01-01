import { BookingPanelComponent } from './../booking-panel/booking-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  showBookPanel = false;

  readonly bookRoomForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
  });

  onBookRoom() {}
}
