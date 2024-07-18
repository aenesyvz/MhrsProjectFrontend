import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHomeCardComponent } from './patient-home-card.component';

describe('PatientHomeCardComponent', () => {
  let component: PatientHomeCardComponent;
  let fixture: ComponentFixture<PatientHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHomeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
