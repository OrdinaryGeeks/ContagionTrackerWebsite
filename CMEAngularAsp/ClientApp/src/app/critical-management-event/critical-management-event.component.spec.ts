import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalManagementEventComponent } from './critical-management-event.component';

describe('CriticalManagementEventComponent', () => {
  let component: CriticalManagementEventComponent;
  let fixture: ComponentFixture<CriticalManagementEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalManagementEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalManagementEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
