import { Component } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  booking: Booking = {
    id: 1,
    customerName: 'Max Muster',
    roomNumber: 120,
    startDate: new Date(),
    endDate: new Date('2023-06-10'),
  };
}
