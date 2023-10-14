import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { PolyclinicsComponent } from './components/polyclinics/polyclinics.component';
import { AddAndUpdateModalComponent } from './components/add-and-update-modal/add-and-update-modal.component';
import { AppointmentTimeComponent } from './components/appointment-time/appointment-time.component';
import { CityComponent } from './components/city/city.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { DistrictComponent } from './components/district/district.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MedicineCompanyComponent } from './components/medicine-company/medicine-company.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { AddMedicineCompanyComponent } from './components/medicine-company/add-medicine-company/add-medicine-company.component';
import { UpdateMedicineCompanyComponent } from './components/medicine-company/update-medicine-company/update-medicine-company.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminFormInputComponent } from './commons/admin-form-input/admin-form-input.component';
import { AddMedicineComponent } from './components/medicine/add-medicine/add-medicine.component';
import { AdminFormTextAreaComponent } from './commons/admin-form-text-area/admin-form-text-area.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { AddHospitalComponent } from './components/hospital/add-hospital/add-hospital.component';
import { AdminFormSelectComponent } from './commons/admin-form-select/admin-form-select.component';
import { UpdateHospitalComponent } from './components/hospital/update-hospital/update-hospital.component';
import { UpdateMedicineComponent } from './components/medicine/update-medicine/update-medicine.component';






@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarMenuComponent,
    PolyclinicsComponent,
    AddAndUpdateModalComponent,
    AppointmentTimeComponent,
    CityComponent,
    DiseaseComponent,
    DistrictComponent,
    MedicineComponent,
    MedicineCompanyComponent,
    OperationClaimComponent,
    UserOperationClaimComponent,
    AddMedicineCompanyComponent,
    UpdateMedicineCompanyComponent,
    AdminFormInputComponent,
    AddMedicineComponent,
    AdminFormTextAreaComponent,
    HospitalComponent,
    AddHospitalComponent,
    AdminFormSelectComponent,
    UpdateHospitalComponent,
    UpdateMedicineComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AdminModule { }
