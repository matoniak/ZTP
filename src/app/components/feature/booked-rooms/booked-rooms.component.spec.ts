import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomsComponent } from './booked-rooms.component';

describe('BookedRoomsComponent', () => {
  let component: BookedRoomsComponent;
  let fixture: ComponentFixture<BookedRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedRoomsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookedRoomsComponent);
    component = fixture.componentInstance;
    component.bookings = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
