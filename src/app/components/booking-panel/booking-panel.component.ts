import { Component, Input } from '@angular/core';

@Component({
  selector: 'booking-panel',
  standalone: true,
  imports: [],
  templateUrl: './booking-panel.component.html',
})
export class BookingPanelComponent {
  @Input() showBookPanel = false;

  value: number | undefined = undefined;

  paymentOptions: any[] = [
    { name: 'Basic', value: 1 },
    { name: 'Premium', value: 2 },
    { name: 'Enterprise', value: 3 },
  ];
}
