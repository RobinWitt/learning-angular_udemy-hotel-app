import { Booking } from './booking';

export const Bookings: Booking[] = [
  {
    id: 1,
    customerName: 'Max Muster',
    roomNumber: 120,
    startDate: new Date('2023-06-05'),
    endDate: new Date('2023-06-10'),
  },
  {
    id: 2,
    customerName: 'Jane Doe',
    roomNumber: 123,
    startDate: new Date('2023-05-31'),
    endDate: new Date('2023-06-04'),
  },
  {
    id: 3,
    customerName: 'John Doe',
    roomNumber: 124,
    startDate: new Date('2023-05-31'),
    endDate: new Date('2023-06-08'),
  },
  {
    id: 4,
    customerName: 'Hildegard Muster',
    roomNumber: 132,
    startDate: new Date('2023-08-05'),
    endDate: new Date('2023-08-22'),
  },
];
