import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCheckButtonComponent } from './show-all-check-button.component';

describe('ShowAllCheckButtonComponent', () => {
  let component: ShowAllCheckButtonComponent;
  let fixture: ComponentFixture<ShowAllCheckButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllCheckButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCheckButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
