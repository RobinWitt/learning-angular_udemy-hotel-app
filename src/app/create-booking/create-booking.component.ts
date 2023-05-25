import { Component } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent {
  booking: Booking = {
    id: 100,
    customerName: 'Your Name',
    roomNumber: 100,
    checkIn: new Date(),
    checkOut: new Date(),
  };
}
