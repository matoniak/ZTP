import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingFormComponent } from './room-booking-form.component';

describe('RoomBookingFormComponent', () => {
  let component: RoomBookingFormComponent;
  let fixture: ComponentFixture<RoomBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
