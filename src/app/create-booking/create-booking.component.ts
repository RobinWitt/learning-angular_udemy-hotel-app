import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { nanoid } from 'nanoid';
import { RoomNumbersService } from '../room-numbers.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private roomNumbersService: RoomNumbersService
  ) {}

  booking: Booking = {
    id: nanoid(),
    customerName: '',
    roomNumber: 0,
    checkIn: new Date(),
    checkOut: new Date(),
  };

  roomNumbers: number[] = [];

  ngOnInit(): void {
    if (this.router.url !== '/createBooking') {
      const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
      });
    }

    this.roomNumbersService.getRoomNumbers().subscribe((result) => {
      this.roomNumbers = result;
    });
  }

  save(): void {
    this.bookingService.addBooking(this.booking).subscribe();
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
