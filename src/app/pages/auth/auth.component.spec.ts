import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth.component';
import { provideRouter } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

describe('AuthComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  let authForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPageComponent, ReactiveFormsModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;

    authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('authForm', () => {
    it('should create a form with email and password controls', () => {
      expect(authForm.contains('email')).toBeTruthy();
      expect(authForm.contains('password')).toBeTruthy();
    });

    it('should mark email as invalid if empty', () => {
      const emailControl = authForm.get('email');
      emailControl?.setValue('');

      expect(emailControl?.valid).toBeFalsy();
      expect(emailControl?.errors).toEqual({ required: true });
    });

    it('should mark email as invalid if not a valid email', () => {
      const emailControl = authForm.get('email');
      emailControl?.setValue('invalid-email');

      expect(emailControl?.valid).toBeFalsy();
      expect(emailControl?.errors).toEqual({ email: true });
    });

    it('should mark email as valid if a valid email is provided', () => {
      const emailControl = authForm.get('email');
      emailControl?.setValue('test@example.com');

      expect(emailControl?.valid).toBeTruthy();
    });

    it('should mark password as invalid if empty', () => {
      const passwordControl = authForm.get('password');
      passwordControl?.setValue('');

      expect(passwordControl?.valid).toBeFalsy();
      expect(passwordControl?.errors).toEqual({ required: true });
    });

    it('should mark password as invalid if less than 8 characters', () => {
      const passwordControl = authForm.get('password');
      passwordControl?.setValue('short');

      expect(passwordControl?.valid).toBeFalsy();
      expect(passwordControl?.errors?.['minlength']).toBeTruthy();
    });

    it('should mark password as invalid if more than 16 characters', () => {
      const passwordControl = authForm.get('password');
      passwordControl?.setValue('this_password_is_too_long');

      expect(passwordControl?.valid).toBeFalsy();
      expect(passwordControl?.errors?.['maxlength']).toBeTruthy();
    });

    it('should mark password as valid if between 8 and 16 characters', () => {
      const passwordControl = authForm.get('password');
      passwordControl?.setValue('validPass1');

      expect(passwordControl?.valid).toBeTruthy();
    });
  });
});
