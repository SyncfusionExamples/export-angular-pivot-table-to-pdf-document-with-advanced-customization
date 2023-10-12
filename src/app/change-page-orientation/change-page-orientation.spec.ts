import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePageOrientationComponent } from './change-page-orientation.component';

describe('ChangingFileNameComponent', () => {
  let component: ChangePageOrientationComponent;
  let fixture: ComponentFixture<ChangePageOrientationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePageOrientationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePageOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
