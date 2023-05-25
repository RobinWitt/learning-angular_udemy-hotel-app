import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  booking: Booking = {
    id: 100,
    customerName: 'Your Name',
    roomNumber: 100,
    checkIn: new Date(),
    checkOut: new Date(),
  };

  ngOnInit(): void {
    if (this.router.url !== '/createBooking') {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      const bookingById = Bookings.find((booking) => booking.id === id)!;
      this.booking = bookingById;
    }
  }

  save(): void {
    let bookingById = Bookings.find(
      (booking) => booking.id === this.booking.id
    );

    if (bookingById === null || bookingById === undefined) {
      Bookings.push(this.booking);
    } else {
      bookingById = this.booking;
    }
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isCheckIn: boolean) {
    const newDate = (event.target as HTMLInputElement).value;

    if (isCheckIn) {
      this.booking.checkIn = new Date(newDate);
    } else {
      this.booking.checkOut = new Date(newDate);
    }
  }
}
