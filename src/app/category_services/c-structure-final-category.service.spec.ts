import { TestBed } from '@angular/core/testing';

import { CStructureFinalCategoryService } from './c-structure-final-category.service';

describe('CStructureFinalCategoryService', () => {
  let service: CStructureFinalCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CStructureFinalCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
