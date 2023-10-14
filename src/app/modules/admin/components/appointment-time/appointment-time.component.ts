import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetByIdAppoinmentTimeDto, GetListAppoinmentTimeDto } from 'src/app/models/DTOs/appoinmentTimeDtos';
import { AppoinmentTimeService } from 'src/app/services/appoinment-time.service';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from 'src/app/shared/validator/custom-validator';


@Component({
  selector: 'app-appointment-time',
  templateUrl: './appointment-time.component.html',
  styleUrls: ['./appointment-time.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class AppointmentTimeComponent implements OnInit {
  title: string;
  appointmentTimeList: GetListAppoinmentTimeDto[];
  appointmentTime: GetByIdAppoinmentTimeDto;

  addForm: FormGroup;
  updateForm: FormGroup;

  id: number;
  hour: string;
  minute: string;

  isOpenAddModal: boolean = false;
  isOpenUpdateModal: boolean = false;
  showError: boolean = false;

  constructor(
    private appointmentTimeService: AppoinmentTimeService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appointmentTimeService.getList().subscribe((response) => {
      this.appointmentTimeList = response;
    });
  }

  add() {

    if (this.addForm.valid) {
      let appointmentTime = Object.assign({}, this.addForm.value);

      this.appointmentTimeService.add(appointmentTime).subscribe((response) => {
        this.addForm.reset();
        this.getList();

        if (this.addForm.get('minute')) {
          console.log("jjadfsdsd");

        }
      }, (error) => {
        console.log(error.statusText);

        this.toastr.error("Randevu Zamanı Eklenemedi", error.statusText == "Unauthorized" ? "Yetkiniz Yok" : "FNDJS", {
          closeButton: true,
          positionClass: 'toast-bottom-right',
        });
      });
    } else {
      this.toastr.error("Randevu Zamanı Eklenemedi", "Ekisk", {
        closeButton: true,
        positionClass: 'toast-bottom-right',
      });

      this.showError = true;
    }
  }

  createAddForm() {
    this.title = "Randevu Ekle"
    this.addForm = new FormGroup({
      hour: new FormControl(0, [
        Validators.required,
        Validators.min(9),
        Validators.max(17),

      ],),
      minute: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(59),
        CustomValidators.numericValidator
      ])
    });


  }

  openAddModal() {
    this.isOpenAddModal = true;
    this.createAddForm();
  }

  closeAddModal() {
    this.isOpenAddModal = false;
    this.addForm.reset();
    this.showError = false;
  }



  update() {
    if (this.updateForm.valid) {
      let appointmentTime = Object.assign({}, this.updateForm.value);

      this.appointmentTimeService.update(appointmentTime).subscribe((response) => {
        this.closeUpdateModal();
        this.getList();
      })
    }
  }

  createUpdateForm(appointmentTime: GetListAppoinmentTimeDto) {
    this.title = "Randevu Güncelle"
    this.updateForm = new FormGroup({
      id: new FormControl(appointmentTime.id, Validators.required),
      hour: new FormControl(appointmentTime.hour, [
        Validators.required,
        Validators.min(9),
        Validators.max(17)
      ],),
      minute: new FormControl(appointmentTime.minute, [
        Validators.required,
        Validators.min(0),
        Validators.max(59),
        CustomValidators.numericValidator
      ])
    });


  }

  closeUpdateModal() {
    this.isOpenUpdateModal = false;
    this.showError = false;
    this.updateForm.reset();
  }

  openUpdateModal(appointmentTime: GetListAppoinmentTimeDto) {
    this.isOpenUpdateModal = true;
    this.createUpdateForm(appointmentTime);
  }

  delete(id: number) {
    this.appointmentTimeService.delete(id).subscribe((response) => { });
  }
}
