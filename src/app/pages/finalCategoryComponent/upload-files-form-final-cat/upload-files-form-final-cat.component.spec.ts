import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesFormFinalCatComponent } from './upload-files-form-final-cat.component';

describe('UploadFilesFormFinalCatComponent', () => {
  let component: UploadFilesFormFinalCatComponent;
  let fixture: ComponentFixture<UploadFilesFormFinalCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesFormFinalCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesFormFinalCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
