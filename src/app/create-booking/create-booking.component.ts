import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent {
  constructor(private router: Router) {}

  booking: Booking = {
    id: 100,
    customerName: 'Your Name',
    roomNumber: 100,
    checkIn: new Date(),
    checkOut: new Date(),
  };

  save(): void {
    Bookings.push(this.booking);
    this.router.navigate(['bookings']);
  }
}
