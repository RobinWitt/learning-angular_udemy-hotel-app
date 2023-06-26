import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor(private bookingService: BookingService) {}

  bookings: Booking[] = [];
  loadBookings: boolean = true;

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      this.bookings = result;
      this.loadBookings = false;
    });
  }

  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking).subscribe();
    this.bookings = this.bookings.filter((b) => b !== booking);
    // ???
  }
}
