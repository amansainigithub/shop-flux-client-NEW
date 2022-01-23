import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCategoryComponent } from './final-category.component';

describe('FinalCategoryComponent', () => {
  let component: FinalCategoryComponent;
  let fixture: ComponentFixture<FinalCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
