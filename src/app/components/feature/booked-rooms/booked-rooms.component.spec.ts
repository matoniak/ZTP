import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomsComponent } from './booked-rooms.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BookedRoomsComponent', () => {
  let component: BookedRoomsComponent;
  let fixture: ComponentFixture<BookedRoomsComponent>;

  // class Util {
  //   static get emptyResponse(): DebugElement {
  //     return fixture.debugElement.query(By.css('[data-role="booked-rooms-empty-response"]'));
  //   }
  // }

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

  // it('should display proper message if no bookings', () => {
  //   expect(Util.emptyResponse.nativeElement.content).toContain('You don’t have any reservation');
  // });
});
