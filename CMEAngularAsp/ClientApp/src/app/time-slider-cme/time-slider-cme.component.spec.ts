import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSliderCMEComponent } from './time-slider-cme.component';

describe('TimeSliderCMEComponent', () => {
  let component: TimeSliderCMEComponent;
  let fixture: ComponentFixture<TimeSliderCMEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSliderCMEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSliderCMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
