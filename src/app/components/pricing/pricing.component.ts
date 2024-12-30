import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'pricing',
  standalone: true,
  imports: [CommonModule, ButtonModule, CheckboxModule, InputTextModule, SelectButton],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  showBookPanel = false;
}
