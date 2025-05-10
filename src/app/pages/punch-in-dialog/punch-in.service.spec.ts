import { TestBed } from '@angular/core/testing';

import { PunchInService } from './punch-in-dialog.service';

describe('PunchInService', () => {
  let service: PunchInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
