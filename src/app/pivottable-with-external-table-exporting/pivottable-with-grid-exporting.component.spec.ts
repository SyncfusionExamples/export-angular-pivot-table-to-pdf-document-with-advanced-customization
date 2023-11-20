import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTableExportingComponent } from './pivottable-with-grid-exporting.component';

describe('ExternalTableExportingComponent', () => {
  let component: ExternalTableExportingComponent;
  let fixture: ComponentFixture<ExternalTableExportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalTableExportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalTableExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
