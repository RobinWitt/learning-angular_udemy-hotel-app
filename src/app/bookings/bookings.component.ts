import { Component } from '@angular/core';
import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  bookings = Bookings;

  deleteBooking(id: number): void {
    this.bookings = Bookings.filter((booking) => booking.id !== id);
  }
}
