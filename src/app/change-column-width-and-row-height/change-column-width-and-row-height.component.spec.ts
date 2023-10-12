import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTableColumnWidthAndRowHeightComponent } from './change-column-width-and-row-height.component';

describe('CustomizeColumnCountComponent', () => {
  let component: ChangeTableColumnWidthAndRowHeightComponent;
  let fixture: ComponentFixture<ChangeTableColumnWidthAndRowHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTableColumnWidthAndRowHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTableColumnWidthAndRowHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
