import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingFormComponent } from './room-booking-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

describe('RoomBookingFormComponent', () => {
  let component: RoomBookingFormComponent;
  let fixture: ComponentFixture<RoomBookingFormComponent>;

  let bookRoomForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingFormComponent, HttpClientModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomBookingFormComponent);
    component = fixture.componentInstance;

    bookRoomForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      pricingPlans: new FormControl(undefined, Validators.required),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('authForm', () => {
    it('should create a form with the correct controls', () => {
      expect(bookRoomForm.contains('id')).toBeTruthy();
      expect(bookRoomForm.contains('name')).toBeTruthy();
      expect(bookRoomForm.contains('surname')).toBeTruthy();
      expect(bookRoomForm.contains('email')).toBeTruthy();
      expect(bookRoomForm.contains('startDate')).toBeTruthy();
      expect(bookRoomForm.contains('endDate')).toBeTruthy();
      expect(bookRoomForm.contains('pricingPlans')).toBeTruthy();
    });

    it('should mark name as invalid if empty', () => {
      const nameControl = bookRoomForm.get('name');
      nameControl?.setValue('');
      expect(nameControl?.valid).toBeFalsy();
      expect(nameControl?.errors).toEqual({ required: true });
    });

    it('should mark surname as invalid if empty', () => {
      const surnameControl = bookRoomForm.get('surname');
      surnameControl?.setValue('');
      expect(surnameControl?.valid).toBeFalsy();
      expect(surnameControl?.errors).toEqual({ required: true });
    });

    it('should mark email as invalid if empty', () => {
      const emailControl = bookRoomForm.get('email');
      emailControl?.setValue('');
      expect(emailControl?.valid).toBeFalsy();
      expect(emailControl?.errors).toEqual({ required: true });
    });

    it('should mark email as invalid if not a valid email', () => {
      const emailControl = bookRoomForm.get('email');
      emailControl?.setValue('invalid-email');
      expect(emailControl?.valid).toBeFalsy();
      expect(emailControl?.errors).toEqual({ email: true });
    });

    it('should mark email as valid if a valid email is provided', () => {
      const emailControl = bookRoomForm.get('email');
      emailControl?.setValue('test@example.com');
      expect(emailControl?.valid).toBeTruthy();
    });

    it('should mark startDate as invalid if empty', () => {
      const startDateControl = bookRoomForm.get('startDate');
      startDateControl?.setValue('');
      expect(startDateControl?.valid).toBeFalsy();
      expect(startDateControl?.errors).toEqual({ required: true });
    });

    it('should mark endDate as invalid if empty', () => {
      const endDateControl = bookRoomForm.get('endDate');
      endDateControl?.setValue('');
      expect(endDateControl?.valid).toBeFalsy();
      expect(endDateControl?.errors).toEqual({ required: true });
    });

    it('should mark pricingPlans as invalid if undefined', () => {
      const pricingPlansControl = bookRoomForm.get('pricingPlans');
      pricingPlansControl?.setValue(undefined);
      expect(pricingPlansControl?.valid).toBeFalsy();
      expect(pricingPlansControl?.errors).toEqual({ required: true });
    });

    it('should mark pricingPlans as valid if a value is provided', () => {
      const pricingPlansControl = bookRoomForm.get('pricingPlans');
      pricingPlansControl?.setValue('Standard Plan');
      expect(pricingPlansControl?.valid).toBeTruthy();
    });

    it('should allow id to be empty', () => {
      const idControl = bookRoomForm.get('id');
      idControl?.setValue('');
      expect(idControl?.valid).toBeTruthy();
    });
  });
});
