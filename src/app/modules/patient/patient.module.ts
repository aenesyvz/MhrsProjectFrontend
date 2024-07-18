import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { PatientFooterComponent } from './commons/components/patient-footer/patient-footer.component';
import { PatientNavbarComponent } from './commons/components/patient-navbar/patient-navbar.component';
import { PatientHomeComponent } from './pages/patient-home/patient-home.component';
import { RouterModule } from '@angular/router';
import { PatientHomeCardComponent } from './pages/patient-home/components/patient-home-card/patient-home-card.component';
import { PatientHomeTabbarComponent } from './pages/patient-home/components/patient-home-tabbar/patient-home-tabbar.component';
import { PatientNearbyHospitalComponent } from './pages/patient-home/components/patient-nearby-hospital/patient-nearby-hospital.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';



@NgModule({
  declarations: [
    PatientLayoutComponent,
    PatientFooterComponent,
    PatientNavbarComponent,
    PatientHomeComponent,
    PatientHomeCardComponent,
    PatientHomeTabbarComponent,
    PatientNearbyHospitalComponent,
    PatientAppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientModule { }
