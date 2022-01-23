import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFinalCategoryComponent } from './show-final-category.component';

describe('ShowFinalCategoryComponent', () => {
  let component: ShowFinalCategoryComponent;
  let fixture: ComponentFixture<ShowFinalCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFinalCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFinalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
