import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRowHeightComponent } from './change-row-height.component';

describe('CustomizeColumnCountComponent', () => {
  let component: ChangeRowHeightComponent;
  let fixture: ComponentFixture<ChangeRowHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRowHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeRowHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
