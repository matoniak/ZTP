import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'faq',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccordionModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {}
