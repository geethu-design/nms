import { TestBed } from '@angular/core/testing';

import { PunchboardHistoryService } from './punchboard-history.service';

describe('PunchboardHistoryService', () => {
  let service: PunchboardHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchboardHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
