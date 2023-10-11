import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePivotTableStyleComponent } from './change-pivot-table-style.component';

describe('ChangePivotTableStyleComponent', () => {
  let component: ChangePivotTableStyleComponent;
  let fixture: ComponentFixture<ChangePivotTableStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePivotTableStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePivotTableStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
