import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetByIdAppoinmentTimeDto, GetListAppoinmentTimeDto } from 'src/app/models/DTOs/appoinmentTimeDtos';
import { AppoinmentTimeService } from 'src/app/services/appoinment-time.service';
import { NotificationService } from 'src/app/services/notification.service';
import { CustomValidators } from 'src/app/shared/validator/custom-validator';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';


@Component({
  selector: 'app-appointment-time',
  templateUrl: './appointment-time.component.html',
  styleUrls: ['./appointment-time.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class AppointmentTimeComponent implements OnInit {
  validationSchema: ValidateSchema = new ValidateSchema();

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


  hourValidationSchema: Record<string, string> = {
    required: "Lütfen boş bırakmayın",
    max: "En fazla 18 girebilirsiniz",
    min: "En az 09 girebilirsiniz",
    numericValidator: "Lütfen Sayı Giriniz"
  }


  minuteValidationSchema: Record<string, string> = {
    required: "Lütfen boş bırakmayın",
    max: "En fazla 59 girebilirsiniz",
    min: "En az 00 girebilirsiniz",
    numericValidator: "Lütfen Sayı Giriniz"
  }

  constructor(
    private appointmentTimeService: AppoinmentTimeService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appointmentTimeService.getList().subscribe((response) => {
      this.appointmentTimeList = response;
    }, (error) => {
      this.notificationService.warningNotification("Randevu zamanları getirilemedi!");
    });
  }

  add() {
    if (this.addForm.valid) {
      let appointmentTime = Object.assign({}, this.addForm.value);
      this.appointmentTimeService.add(appointmentTime).subscribe((response) => {
        this.addForm.reset();
        this.notificationService.errorNotification("Randevu Zamanı Eklendi!");
        this.getList();
      }, (error) => {
        this.notificationService.errorNotification("Randevu Zamanı Eklenemedi");
      });
    } else {
      this.notificationService.errorNotification("Randevu Zamanı Eklenemedi");
      this.showError = true;
    }
  }

  createAddForm() {

    this.addForm = new FormGroup({
      hour: new FormControl("", [
        Validators.required,
        Validators.min(9),
        Validators.max(18),
        CustomValidators.numericValidator
      ],),
      minute: new FormControl("", [
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
        this.notificationService.successNotification("Randevu zamanı başarıyla güncellendi!");
      }, (error) => {
        this.notificationService.errorNotification("Randevu zamanı güncellenemedi", "Başarısız!");
      });
    } else {
      this.notificationService.errorNotification("Lütfen formu düzgün doldurun", "Hatalı!");
      this.showError = true;
    }
  }

  createUpdateForm(appointmentTime: GetListAppoinmentTimeDto) {
    this.updateForm = new FormGroup({
      id: new FormControl(appointmentTime.id, Validators.required),
      hour: new FormControl(appointmentTime.hour, [
        Validators.required,
        Validators.min(9),
        Validators.max(18),
        CustomValidators.numericValidator
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
    this.appointmentTimeService.delete(id).subscribe((response) => {
      this.notificationService.successNotification("Randevu zamanı silindi");
    }, (error) => {
      this.notificationService.errorNotification("Randevu zamanı silinemedi!", "Başarısız!");
    });
  }
}
