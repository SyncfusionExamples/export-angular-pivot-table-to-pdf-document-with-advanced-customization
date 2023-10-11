import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAllPagesComponent } from './export-all-pages.component';

describe('ExportAllPagesComponent', () => {
  let component: ExportAllPagesComponent;
  let fixture: ComponentFixture<ExportAllPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportAllPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportAllPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
