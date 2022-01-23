import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesFinalCategoryComponent } from './upload-files-final-category.component';

describe('UploadFilesFinalCategoryComponent', () => {
  let component: UploadFilesFinalCategoryComponent;
  let fixture: ComponentFixture<UploadFilesFinalCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesFinalCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesFinalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
