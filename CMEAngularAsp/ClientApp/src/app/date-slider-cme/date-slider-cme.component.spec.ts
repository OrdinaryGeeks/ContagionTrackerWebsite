import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSliderCMEComponent } from './date-slider-cme.component';

describe('DateSliderCMEComponent', () => {
  let component: DateSliderCMEComponent;
  let fixture: ComponentFixture<DateSliderCMEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSliderCMEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSliderCMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
