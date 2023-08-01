import { TestBed } from '@angular/core/testing';

import { LocalRegisterService } from './local-register.service';

describe('LocalRegisterService', () => {
  let service: LocalRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
