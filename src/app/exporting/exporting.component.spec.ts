import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExportingComponent } from './exporting.component';

describe('TableExportingComponent', () => {
  let component: TableExportingComponent;
  let fixture: ComponentFixture<TableExportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
