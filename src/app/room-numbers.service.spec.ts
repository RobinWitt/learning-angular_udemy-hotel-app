import { TestBed } from '@angular/core/testing';

import { RoomNumbersService } from './room-numbers.service';

describe('RoomNumbersService', () => {
  let service: RoomNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
