import { TestBed } from '@angular/core/testing';

import { PunchboardStatusService } from './punchboard-status.service';

describe('PunchboardStatusService', () => {
  let service: PunchboardStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchboardStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
