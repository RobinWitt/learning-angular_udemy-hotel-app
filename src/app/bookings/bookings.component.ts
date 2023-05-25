import { Component } from '@angular/core';
import { Bookings } from '../mock-bookings';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  bookings = Bookings;

  deleteBooking(booking: Booking): void {
    let index = Bookings.indexOf(booking);

    Bookings.splice(index, 1);
  }
}
