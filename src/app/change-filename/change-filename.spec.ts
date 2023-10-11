import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFilenameComponent } from './change-filename.component';

describe('ChangeFilenameComponentComponent', () => {
  let component: ChangeFilenameComponent;
  let fixture: ComponentFixture<ChangeFilenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeFilenameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeFilenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
