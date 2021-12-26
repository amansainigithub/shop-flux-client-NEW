import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesFormProductComponent } from './upload-files-form-product.component';

describe('UploadFilesFormProductComponent', () => {
  let component: UploadFilesFormProductComponent;
  let fixture: ComponentFixture<UploadFilesFormProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesFormProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesFormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
