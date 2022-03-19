import { TestBed } from '@angular/core/testing';

import { CreateProductSizeService } from './create-product-size.service';

describe('CreateProductSizeService', () => {
  let service: CreateProductSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProductSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
