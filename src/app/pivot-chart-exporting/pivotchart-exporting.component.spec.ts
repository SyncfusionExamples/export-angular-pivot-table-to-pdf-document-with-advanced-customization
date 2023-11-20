import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotChartExportingComponent } from './pivotchart-exporting.component';

describe('PivotChartExportingComponent', () => {
  let component: PivotChartExportingComponent;
  let fixture: ComponentFixture<PivotChartExportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotChartExportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PivotChartExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
