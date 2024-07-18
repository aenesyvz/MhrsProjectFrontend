import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './modules/admin/admin-layout/admin-layout.component';
import { PolyclinicsComponent } from './modules/admin/components/polyclinics/polyclinics.component';
import { AppointmentTimeComponent } from './modules/admin/components/appointment-time/appointment-time.component';
import { CityComponent } from './modules/admin/components/city/city.component';
import { DiseaseComponent } from './modules/admin/components/disease/disease.component';
import { MedicineComponent } from './modules/admin/components/medicine/medicine.component';
import { MedicineCompanyComponent } from './modules/admin/components/medicine-company/medicine-company.component';
import { OperationClaimComponent } from './modules/admin/components/operation-claim/operation-claim.component';
import { UserOperationClaimComponent } from './modules/admin/components/user-operation-claim/user-operation-claim.component';
import { DistrictComponent } from './modules/admin/components/district/district.component';
import { HomeViewComponent } from './modules/default/pages/home-view/home-view.component';
import { LoginViewComponent } from './modules/default/pages/login-view/login-view.component';
import { RegisterViewComponent } from './modules/default/pages/register-view/register-view.component';
import { AddMedicineCompanyComponent } from './modules/admin/components/medicine-company/add-medicine-company/add-medicine-company.component';
import { UpdateMedicineCompanyComponent } from './modules/admin/components/medicine-company/update-medicine-company/update-medicine-company.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AddMedicineComponent } from './modules/admin/components/medicine/add-medicine/add-medicine.component';
import { HospitalComponent } from './modules/admin/components/hospital/hospital.component';
import { AddHospitalComponent } from './modules/admin/components/hospital/add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from './modules/admin/components/hospital/update-hospital/update-hospital.component';
import { UpdateMedicineComponent } from './modules/admin/components/medicine/update-medicine/update-medicine.component';
import { PatientLayoutComponent } from './modules/patient/patient-layout/patient-layout.component';
import { PatientHomeComponent } from './modules/patient/pages/patient-home/patient-home.component';
import { PatientAppointmentComponent } from './modules/patient/patient-appointment/patient-appointment.component';

const routes: Routes = [
  {
    path: "", component: HomeViewComponent
  },
  {
    path: "Login", component: LoginViewComponent
  },
  {
    path: "Register", component: RegisterViewComponent
  },
  {
    path: "Admin",
    component: AdminLayoutComponent,
    children: [
      { path: "Polyclinics", component: PolyclinicsComponent },
      { path: "AppointmentTimes", component: AppointmentTimeComponent },
      { path: "Cities", component: CityComponent },
      { path: "Disease", component: DiseaseComponent },
      { path: "Districts/:Id", component: DistrictComponent },
      { path: "Medicines", component: MedicineComponent },
      { path: "Medicines/Add", component: AddMedicineComponent },
      { path: "Medicines/Update", component: UpdateMedicineComponent },
      { path: "MedicineCompanies", component: MedicineCompanyComponent },
      { path: "MedicineCompanies/Add", component: AddMedicineCompanyComponent, },
      { path: "MedicineCompanies/Update", component: UpdateMedicineCompanyComponent, },
      { path: "Hospitals", component: HospitalComponent },
      { path: "Hospitals/Add", component: AddHospitalComponent },
      { path: "Hospitals/Update", component: UpdateHospitalComponent },
      { path: "OperationClaims", component: OperationClaimComponent },
      { path: "UserOperationClaim", component: UserOperationClaimComponent }
    ]
  },
  {
    path: "Patient",
    component: PatientLayoutComponent,
    children: [
      { path: "Home", component: PatientHomeComponent },
      { path: "Appointment", component: PatientAppointmentComponent }
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
