import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileFormSubCatComponent } from './upload-file-form-sub-cat.component';

describe('UploadFileFormSubCatComponent', () => {
  let component: UploadFileFormSubCatComponent;
  let fixture: ComponentFixture<UploadFileFormSubCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileFormSubCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileFormSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
