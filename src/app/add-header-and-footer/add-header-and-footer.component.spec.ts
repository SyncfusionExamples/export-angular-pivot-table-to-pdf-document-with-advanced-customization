import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeaderAndFooterComponent } from './add-header-and-footer.component';

describe('AddHeaderAndFooterComponent', () => {
  let component: AddHeaderAndFooterComponent;
  let fixture: ComponentFixture<AddHeaderAndFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeaderAndFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHeaderAndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
