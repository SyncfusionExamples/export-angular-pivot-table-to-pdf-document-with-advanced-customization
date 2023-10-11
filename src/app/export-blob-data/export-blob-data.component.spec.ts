import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBlobDataComponent } from './export-blob-data.component';

describe('ExportBlobDataComponent', () => {
  let component: ExportBlobDataComponent;
  let fixture: ComponentFixture<ExportBlobDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportBlobDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportBlobDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
