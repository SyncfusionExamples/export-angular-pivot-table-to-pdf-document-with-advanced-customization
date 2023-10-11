import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCustomFontComponent } from './adding-custom-font.component';

describe('AddingCustomFontComponent', () => {
  let component: AddingCustomFontComponent;
  let fixture: ComponentFixture<AddingCustomFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingCustomFontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingCustomFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
