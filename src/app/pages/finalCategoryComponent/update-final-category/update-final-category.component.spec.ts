import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinalCategoryComponent } from './update-final-category.component';

describe('UpdateFinalCategoryComponent', () => {
  let component: UpdateFinalCategoryComponent;
  let fixture: ComponentFixture<UpdateFinalCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFinalCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFinalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
