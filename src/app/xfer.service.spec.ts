import { TestBed } from '@angular/core/testing';

import { XferService } from './xfer.service';

describe('XferService', () => {
  let service: XferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
