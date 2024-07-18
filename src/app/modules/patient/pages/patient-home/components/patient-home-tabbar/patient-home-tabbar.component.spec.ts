import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHomeTabbarComponent } from './patient-home-tabbar.component';

describe('PatientHomeTabbarComponent', () => {
  let component: PatientHomeTabbarComponent;
  let fixture: ComponentFixture<PatientHomeTabbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHomeTabbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHomeTabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
