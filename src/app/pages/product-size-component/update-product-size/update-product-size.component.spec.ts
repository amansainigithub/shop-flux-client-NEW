import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductSizeComponent } from './update-product-size.component';

describe('UpdateProductSizeComponent', () => {
  let component: UpdateProductSizeComponent;
  let fixture: ComponentFixture<UpdateProductSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
