import { Injectable } from '@angular/core';
import { RoomBookingItem } from '@shared/interfaces/room-booking.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameRoomBookingService {
  private readonly url = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) {}

  getBooking(): Observable<RoomBookingItem> {
    return this.http.get<RoomBookingItem>(this.url);
  }

  addBooking(payload: RoomBookingItem): Observable<RoomBookingItem> {
    return this.http.post<RoomBookingItem>(this.url, payload);
  }

  editBooking(payload: RoomBookingItem): Observable<RoomBookingItem> {
    return this.http.put<RoomBookingItem>(this.url, payload);
  }

  deleteBookingById(id: number): Observable<RoomBookingItem> {
    const url = `${this.url}${id}`;
    return this.http.delete<RoomBookingItem>(url);
  }
}
