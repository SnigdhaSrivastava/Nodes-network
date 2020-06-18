import { TestBed } from '@angular/core/testing';

import { InterfaceinfoService } from './interfaceinfo.service';

describe('InterfaceinfoService', () => {
  let service: InterfaceinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
