import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'about-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {}
