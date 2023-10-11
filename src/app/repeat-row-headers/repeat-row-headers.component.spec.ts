import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatRowHeadersComponent } from './repeat-row-headers.component';

describe('CustomizeColumnCountComponent', () => {
  let component: RepeatRowHeadersComponent;
  let fixture: ComponentFixture<RepeatRowHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatRowHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatRowHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
