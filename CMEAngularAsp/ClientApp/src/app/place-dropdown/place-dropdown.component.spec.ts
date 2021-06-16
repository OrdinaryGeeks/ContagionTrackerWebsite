import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDropdownComponent } from './place-dropdown.component';

describe('PlaceDropdownComponent', () => {
  let component: PlaceDropdownComponent;
  let fixture: ComponentFixture<PlaceDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
