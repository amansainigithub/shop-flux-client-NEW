import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesRootCategoryComponent } from './upload-files-root-category.component';

describe('UploadFilesRootCategoryComponent', () => {
  let component: UploadFilesRootCategoryComponent;
  let fixture: ComponentFixture<UploadFilesRootCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesRootCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesRootCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
