import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleExportingComponent } from './multiple-exporting.component';

describe('MultipleExportingComponent', () => {
  let component: MultipleExportingComponent;
  let fixture: ComponentFixture<MultipleExportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleExportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
