import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: '1sjkztr',
        customerName: 'Max Muster',
        roomNumber: 120,
        checkIn: new Date('2023-06-05'),
        checkOut: new Date('2023-06-10'),
      },
      {
        id: '2awqeq',
        customerName: 'Jane Doe',
        roomNumber: 123,
        checkIn: new Date('2023-05-31'),
        checkOut: new Date('2023-06-04'),
      },
      {
        id: '3qwet',
        customerName: 'John Doe',
        roomNumber: 124,
        checkIn: new Date('2023-05-31'),
        checkOut: new Date('2023-06-08'),
      },
      {
        id: '4hgfk',
        customerName: 'Hildegard Muster',
        roomNumber: 132,
        checkIn: new Date('2023-08-05'),
        checkOut: new Date('2023-08-22'),
      },
    ];

    const roomNumbers: number[] = [];
    for (let i = 100; i <= 150; i++) {
      roomNumbers.push(i);
    }

    return { bookings, roomNumbers };
  }

  constructor() {}
}
