import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAndChartExportComponent } from './table-and-chart-export.component';

describe('TableAndChartExportComponent', () => {
  let component: TableAndChartExportComponent;
  let fixture: ComponentFixture<TableAndChartExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAndChartExportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAndChartExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
