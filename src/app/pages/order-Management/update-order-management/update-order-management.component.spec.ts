import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderManagementComponent } from './update-order-management.component';

describe('UpdateOrderManagementComponent', () => {
  let component: UpdateOrderManagementComponent;
  let fixture: ComponentFixture<UpdateOrderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrderManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
