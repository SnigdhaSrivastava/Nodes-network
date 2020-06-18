import { TestBed } from '@angular/core/testing';

import { AddnodeService } from './addnode.service';

describe('AddnodeService', () => {
  let service: AddnodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
