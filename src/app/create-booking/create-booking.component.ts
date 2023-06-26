import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { nanoid } from 'nanoid';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { RoomNumbersService } from '../room-numbers.service';
import { __values } from 'tslib';

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
    private roomNumbersService: RoomNumbersService,
    private formbuilder: FormBuilder
  ) {}

  booking: Booking = {
    id: nanoid(),
    customerName: '',
    roomNumber: 0,
    checkIn: new Date(),
    checkOut: new Date(),
  };

  bookingForm: FormGroup = this.formbuilder.group({
    customerName: [
      '',
      Validators.compose([Validators.required, Validators.minLength(4)]),
    ],
    roomNumber: ['', Validators.required],
    checkIn: ['', Validators.required],
    checkOut: ['', Validators.required],
  });

  roomNumbers: number[] = [];
  editBooking: boolean = false;
  loadBooking: boolean = true;

  ngOnInit(): void {
    if (this.router.url !== '/createBooking') {
      this.editBooking = true;
      const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;

        this.loadBooking = false;

        this.bookingForm.setValue({
          customerName: this.booking.customerName,
          roomNumber: this.booking.roomNumber,
          checkIn: this.booking.checkIn,
          checkOut: this.booking.checkOut,
        });
      });
    }

    this.roomNumbersService.getRoomNumbers().subscribe((result) => {
      this.roomNumbers = result;
    });
  }

  save(): void {
    this.booking.customerName = this.bookingForm.get('customerName')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.checkIn = this.bookingForm.get('checkIn')?.value;
    this.booking.checkOut = this.bookingForm.get('checkOut')?.value;

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
