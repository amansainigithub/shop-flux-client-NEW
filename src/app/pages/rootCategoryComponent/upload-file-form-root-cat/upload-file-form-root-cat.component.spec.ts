import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileFormRootCatComponent } from './upload-file-form-root-cat.component';

describe('UploadFileFormRootCatComponent', () => {
  let component: UploadFileFormRootCatComponent;
  let fixture: ComponentFixture<UploadFileFormRootCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileFormRootCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileFormRootCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
