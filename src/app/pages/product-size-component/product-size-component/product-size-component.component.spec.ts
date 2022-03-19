import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSizeComponentComponent } from './product-size-component.component';

describe('ProductSizeComponentComponent', () => {
  let component: ProductSizeComponentComponent;
  let fixture: ComponentFixture<ProductSizeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSizeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSizeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
