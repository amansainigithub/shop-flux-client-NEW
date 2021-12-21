import { TestBed } from '@angular/core/testing';

import { AuthURLService } from './auth-url.service';

describe('AuthURLService', () => {
  let service: AuthURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
