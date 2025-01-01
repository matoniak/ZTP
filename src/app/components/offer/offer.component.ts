import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'offer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './offer.component.html',
})
export class OfferComponent {}
