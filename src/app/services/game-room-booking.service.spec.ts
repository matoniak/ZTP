import { TestBed } from '@angular/core/testing';

import { GameRoomBookingService } from './game-room-booking.service';
import { HttpClientModule } from '@angular/common/http';

describe('GameRoomBookingService', () => {
  let service: GameRoomBookingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(GameRoomBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
