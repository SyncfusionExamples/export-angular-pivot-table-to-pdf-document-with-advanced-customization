import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDocumentWidthAndHeightComponent } from './change-document-width-and-height.component';

describe('ChangeDocumentWidthAndHeightComponent', () => {
  let component: ChangeDocumentWidthAndHeightComponent;
  let fixture: ComponentFixture<ChangeDocumentWidthAndHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDocumentWidthAndHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDocumentWidthAndHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
