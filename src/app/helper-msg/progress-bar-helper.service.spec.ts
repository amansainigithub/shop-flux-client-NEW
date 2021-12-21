import { TestBed } from '@angular/core/testing';

import { ProgressBarHelperService } from './progress-bar-helper.service';

describe('ProgressBarHelperService', () => {
  let service: ProgressBarHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressBarHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
