import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user/user.service';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Image } from 'primeng/image';

const primeNgModules = [CheckboxModule, ButtonModule, InputTextModule, CheckboxModule, Image];

@Component({
  selector: 'auth',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...primeNgModules, ReactiveFormsModule, NgClass],
  templateUrl: './auth.component.html',
})
export class AuthPageComponent implements OnInit {
  isUserAuthorized = false;

  readonly authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.isUserAuthorizedState$.subscribe(value => (this.isUserAuthorized = value));
  }

  signIn() {
    if (!this.authForm.valid) return console.log('form not valid');

    this.userService.toggleBoolean();

    this.router.navigate(['']);
  }
}
