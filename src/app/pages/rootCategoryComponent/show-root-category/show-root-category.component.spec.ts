import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRootCategoryComponent } from './show-root-category.component';

describe('ShowRootCategoryComponent', () => {
  let component: ShowRootCategoryComponent;
  let fixture: ComponentFixture<ShowRootCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRootCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRootCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
