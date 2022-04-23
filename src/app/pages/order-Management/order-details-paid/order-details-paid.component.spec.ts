import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsPaidComponent } from './order-details-paid.component';

describe('OrderDetailsPaidComponent', () => {
  let component: OrderDetailsPaidComponent;
  let fixture: ComponentFixture<OrderDetailsPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsPaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
