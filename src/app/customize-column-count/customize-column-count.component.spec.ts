import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeColumnCountComponent } from './customize-column-count.component';

describe('CustomizeColumnCountComponent', () => {
  let component: CustomizeColumnCountComponent;
  let fixture: ComponentFixture<CustomizeColumnCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeColumnCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeColumnCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
