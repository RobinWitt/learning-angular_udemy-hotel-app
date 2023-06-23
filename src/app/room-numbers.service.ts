import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomNumbersService {
  constructor(private httpClient: HttpClient) {}

  roomsUrl: string = '/api/roomNumbers';

  getRoomNumbers(): Observable<number[]> {
    const response = this.httpClient.get<number[]>(this.roomsUrl);
    return response;
  }
}
