import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Image } from 'primeng/image';

@Component({
  selector: 'about-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Image],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {}
