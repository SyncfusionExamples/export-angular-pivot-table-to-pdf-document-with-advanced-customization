import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColumnWidthComponent } from './change-column-width.component';

describe('CustomizeColumnCountComponent', () => {
  let component: ChangeColumnWidthComponent;
  let fixture: ComponentFixture<ChangeColumnWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeColumnWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeColumnWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
