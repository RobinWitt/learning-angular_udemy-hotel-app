import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor() {}

  getBookings(): Booking[] {
    return Bookings;
  }

  getBookingById(id: number): Booking {
    const bookingById = Bookings.find((booking) => booking.id === id)!;
    return bookingById;
  }

  addBooking(booking: Booking): void {
    Bookings.push(booking);
  }

  updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }

  deleteBooking(booking: Booking): void {
    let index = Bookings.indexOf(booking);

    Bookings.splice(index, 1);
  }
}
