import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBannerFileComponent } from './upload-banner-file.component';

describe('UploadBannerFileComponent', () => {
  let component: UploadBannerFileComponent;
  let fixture: ComponentFixture<UploadBannerFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBannerFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBannerFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
