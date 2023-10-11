import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePageSizeComponent } from './change-page-size.component';

describe('ChangePageSizeComponent', () => {
  let component: ChangePageSizeComponent;
  let fixture: ComponentFixture<ChangePageSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePageSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
