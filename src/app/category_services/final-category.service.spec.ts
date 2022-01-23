import { TestBed } from '@angular/core/testing';

import { FinalCategoryService } from './final-category.service';

describe('FinalCategoryService', () => {
  let service: FinalCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
