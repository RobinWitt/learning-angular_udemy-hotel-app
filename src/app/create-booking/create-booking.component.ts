import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}

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

      const bookingById = this.bookingService.getBookingById(id);
      this.booking = bookingById;
    }
  }

  save(): void {
    let bookingById = this.bookingService.getBookingById(this.booking.id);

    if (bookingById === null || bookingById === undefined) {
      this.bookingService.addBooking(this.booking);
    } else {
      this.bookingService.updateBooking(this.booking);
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
