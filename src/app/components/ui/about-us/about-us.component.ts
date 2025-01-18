import { Image } from 'primeng/image';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [Image],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {}
