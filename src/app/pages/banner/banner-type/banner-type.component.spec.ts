import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTypeComponent } from './banner-type.component';

describe('BannerTypeComponent', () => {
  let component: BannerTypeComponent;
  let fixture: ComponentFixture<BannerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
