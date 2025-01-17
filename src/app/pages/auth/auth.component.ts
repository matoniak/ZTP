import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

const primeNgModules = [CheckboxModule, ButtonModule, InputTextModule, CheckboxModule];

@Component({
  selector: 'auth',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...primeNgModules, RouterLink],
  templateUrl: './auth.component.html',
})
export class AuthPageComponent {}
