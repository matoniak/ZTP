import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './not-found.component.html',
})
export class NotFoundPageComponent {}
