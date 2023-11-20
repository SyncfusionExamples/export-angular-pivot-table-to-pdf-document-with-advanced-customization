import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePivotChartExportingComponent } from './multiple-pivotchart-exporting.component';

describe('MultiplePivotChartExportingComponent', () => {
  let component: MultiplePivotChartExportingComponent;
  let fixture: ComponentFixture<MultiplePivotChartExportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplePivotChartExportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplePivotChartExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
