import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFinalCatSingleComponent } from './structure-final-cat-single.component';

describe('StructureFinalCatSingleComponent', () => {
  let component: StructureFinalCatSingleComponent;
  let fixture: ComponentFixture<StructureFinalCatSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureFinalCatSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureFinalCatSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
