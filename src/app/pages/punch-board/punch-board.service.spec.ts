import { TestBed } from '@angular/core/testing';

import { PunchBoardService } from './punch-board.service';

describe('PunchBoardService', () => {
  let service: PunchBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
