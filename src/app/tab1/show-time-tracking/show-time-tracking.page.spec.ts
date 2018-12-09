import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimeTrackingPage } from './show-time-tracking.page';

describe('ShowTimeTrackingPage', () => {
  let component: ShowTimeTrackingPage;
  let fixture: ComponentFixture<ShowTimeTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTimeTrackingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimeTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
