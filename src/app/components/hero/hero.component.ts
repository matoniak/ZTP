import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
