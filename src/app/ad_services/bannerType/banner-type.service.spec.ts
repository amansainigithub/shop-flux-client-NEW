import { TestBed } from '@angular/core/testing';

import { BannerTypeService } from './banner-type.service';

describe('BannerTypeService', () => {
  let service: BannerTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
