import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesProductComponent } from './upload-files-product.component';

describe('UploadFilesProductComponent', () => {
  let component: UploadFilesProductComponent;
  let fixture: ComponentFixture<UploadFilesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
