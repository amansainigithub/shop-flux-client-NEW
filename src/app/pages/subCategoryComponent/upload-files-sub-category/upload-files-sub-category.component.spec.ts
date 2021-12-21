import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesSubCategoryComponent } from './upload-files-sub-category.component';

describe('UploadFilesSubCategoryComponent', () => {
  let component: UploadFilesSubCategoryComponent;
  let fixture: ComponentFixture<UploadFilesSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
