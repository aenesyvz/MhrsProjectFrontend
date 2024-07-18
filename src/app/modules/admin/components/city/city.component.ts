import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetListCityDto, UpdateCityDto } from 'src/app/models/DTOs/cityDtos';
import { CityService } from 'src/app/services/city.service';
import { NotificationService } from 'src/app/services/notification.service';
import { CustomValidators } from 'src/app/shared/validator/custom-validator';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class CityComponent implements OnInit {
  cityList: GetListCityDto[];
  city: GetListCityDto;

  addForm: FormGroup;
  updateForm: FormGroup;

  plateCode: number;
  name: string;

  isOpenAddModal: boolean = false;
  isOpenUpdateModal: boolean = false;

  showError: boolean = false;

  plateCodeValidationSchema: Record<string, string> = {
    required: "Lütfen ilin plaka kodunu giriniz",
    min: "Plaka kodu en az 01 olmalıdır",
    max: "Plaka kodu en fazla 81 olmalıdır",
    numericValidator: "Lütfen sayı giriniz",
  }

  cityNameValidationSchema: Record<string, string> = {
    required: "Lütfen ilin plaka kodunu giriniz",
    minlength: "En az 3 karakter olmalıdır"
  }

  constructor(
    private cityService: CityService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.cityService.getList().subscribe((response) => {
      this.cityList = response;
    }, (error) => {
      this.notificationService.warningNotification("İller getirilemedi!");
    });
  }

  getById(id: number) {
    this.cityService.getById(id).subscribe((response) => {
      this.city = response;
    })
  }

  add() {
    if (this.addForm.valid) {
      let city = Object.assign({}, this.addForm.value);
      this.cityService.add(city).subscribe((response) => {
        this.addForm.reset();
        this.getList();
        this.notificationService.successNotification("Yeni İl başarıyla eklendi", "Başarılı!");
      }, (error) => {
        this.notificationService.errorNotification(error.statusText, "Başarısız!");
      });
    } else {
      this.showError = true;
      this.notificationService.warningNotification("Lütfen formu düzgün doldurun!");
    }
  }

  update() {
    if (this.updateForm.valid) {
      let city: UpdateCityDto = Object.assign({}, this.updateForm.value);
      this.cityService.update(city).subscribe((response) => {
        this.closeUpdateModal();
        this.getList();
        this.notificationService.successNotification("İl başarıyla güncellendi!");
      }, (error) => {
        this.notificationService.errorNotification(error.statusText);
      });
    } else {
      this.showError = true;
      this.notificationService.warningNotification("Formu adam akıllı doldur!");
    }
  }

  delete(id: number) {
    this.cityService.delete(id).subscribe((response) => {
      this.getList();
    })
  }

  closeAddModal() {
    this.isOpenAddModal = false;
    this.addForm.reset();
    this.showError = false;
  }

  openAddModal() {
    this.isOpenAddModal = true;
    this.createAddForm();
  }


  openUpdateModal(city: GetListCityDto) {
    this.isOpenUpdateModal = true;
    this.createUpdateForm(city);
  }

  closeUpdateModal() {
    this.isOpenUpdateModal = false;
    this.updateForm.reset();
    this.showError = false;
  }

  createAddForm() {
    this.addForm = new FormGroup({
      plateCode: new FormControl("", [
        Validators.required,
        Validators.min(1),
        Validators.max(81),
        CustomValidators.numericValidator
      ]),
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  createUpdateForm(city: GetListCityDto) {
    this.city = city;
    this.updateForm = new FormGroup({
      id: new FormControl(city.id, Validators.required),
      plateCode: new FormControl(city.plateCode, [
        Validators.required,
        Validators.min(1),
        Validators.max(81),
        CustomValidators.numericValidator
      ]),
      name: new FormControl(city.name, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

}
