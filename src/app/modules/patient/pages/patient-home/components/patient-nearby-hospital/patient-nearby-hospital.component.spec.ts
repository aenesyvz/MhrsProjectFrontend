import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNearbyHospitalComponent } from './patient-nearby-hospital.component';

describe('PatientNearbyHospitalComponent', () => {
  let component: PatientNearbyHospitalComponent;
  let fixture: ComponentFixture<PatientNearbyHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientNearbyHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientNearbyHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
