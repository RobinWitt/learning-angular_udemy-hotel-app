import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookingsUrl: string = '/api/bookings';

  getBookings(): Observable<Booking[]> {
    const response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    return response;
  }

  getBookingById(id: string): Observable<Booking> {
    const response = this.httpClient.get<Booking>(this.bookingsUrl + '/' + id);
    return response;
  }

  addBooking(booking: Booking): Observable<Booking> {
    const response = this.httpClient.post<Booking>(this.bookingsUrl, booking);
    return response;
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    const response = this.httpClient.delete<Booking>(
      this.bookingsUrl + '/' + booking.id
    );
    return response;
  }
}
