import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTableChartExportingComponent } from './pivottable-pivotchart-exporting.component';

describe('MultipleTableChartExportingComponent', () => {
  let component: MultipleTableChartExportingComponent;
  let fixture: ComponentFixture<MultipleTableChartExportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTableChartExportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleTableChartExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
