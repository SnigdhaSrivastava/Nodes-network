import { TestBed } from '@angular/core/testing';

import { AddlinkService } from './addlink.service';

describe('AddlinkService', () => {
  let service: AddlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
