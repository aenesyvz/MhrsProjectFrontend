import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';



@NgModule({
  declarations: [
    FormInputComponent,
    DeleteModalComponent,
    TableHeaderComponent,
    NotFoundComponent,
    GenericModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormInputComponent,
    DeleteModalComponent,
    TableHeaderComponent,
    NotFoundComponent,
    GenericModalComponent

  ]
})
export class SharedModule { }
