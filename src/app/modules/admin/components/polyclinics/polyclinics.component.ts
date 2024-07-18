import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { GetByIdPolyclinicDto, GetListPolyclinicDto } from 'src/app/models/DTOs/polyclinicDtos';
import { NotificationService } from 'src/app/services/notification.service';
import { PolyclinicService } from 'src/app/services/polyclinic.service';

@Component({
  selector: 'app-polyclinics',
  templateUrl: './polyclinics.component.html',
  styleUrls: ['./polyclinics.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class PolyclinicsComponent implements OnInit {
  polyclinicsList: GetListPolyclinicDto[] = [];
  polyclinic: GetByIdPolyclinicDto;

  addForm: FormGroup;
  updateForm: FormGroup;

  id: string;
  name: string;

  hasPrevious: boolean = false;
  hasNext: boolean = false;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageRequest: PageRequest = { pageIndex: this.pageIndex, pageSize: this.pageSize };


  isAddModal: boolean = false;
  isUpdateModal: boolean = false;
  isDeleteModal: boolean = false;

  showError: boolean = false;

  polyclinicNameValidationSchema: Record<string, string> = {
    required: "Lütfen polikinik adını giriniz",
    minlength: "En az 3 karakterden oluşmalı"
  }

  constructor(
    private polyclinicService: PolyclinicService,
    private notificationService: NotificationService
  ) { }


  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.polyclinicService.getList(this.pageRequest).subscribe((response) => {
      this.polyclinicsList = response.items;
      this.hasNext = response.hasNext || false;
      this.hasPrevious = response.hasPrevious || false;
    }, (error) => {
      this.notificationService.warningNotification("Polikinikler getirilemedi!");
    });


  }

  getById(id: number) {
    this.polyclinicService.getById(id).subscribe((response) => {
      this.polyclinic = response;
    })
  }

  add() {
    if (this.addForm.valid) {
      let polyclinic = Object.assign({}, this.addForm.value);

      this.polyclinicService.add(polyclinic).subscribe((response) => {
        this.closeAddModal();
        this.getList();
        this.notificationService.successNotification("Poliklinik eklendi!");
      }, (error) => {
        this.notificationService.errorNotification(error.statusText, "Poliklinik eklenemedi!");
      });
    } else {
      this.showError = true;
      this.notificationService.errorNotification("Lütfen formu düzgün doldurun!");
    }
  }

  update() {
    if (this.updateForm.valid) {
      let polyclinic = Object.assign({}, this.updateForm.value);

      this.polyclinicService.update(polyclinic).subscribe((response) => {
        this.closeUpdateModal();
        this.getList();
        this.notificationService.successNotification("Poliklinik güncellendi!");
      }, (error) => {
        this.notificationService.errorNotification(error.statusText, "Poliklinik güncellenemedi!");
      });
    } else {
      this.showError = true;
      this.notificationService.errorNotification("Lütfen formu düzgün doldurun!");
    }
  }

  delete(id: string) {
    this.polyclinicService.delete(id).subscribe((response) => {
      this.getList();
      this.closeDeleteModal();
    }, (error) => {
      this.notificationService.errorNotification(error.statusText, "Poliklinik silinemedi!")
    })
  }


  openAddModal() {
    this.createAddForm();
    this.isAddModal = true;

  }

  closeAddModal() {
    this.isAddModal = false;
    this.updateForm.reset();
    this.showError = false;
  }

  openUpdateModal(polyclinic: GetListPolyclinicDto) {
    this.polyclinic = polyclinic;
    this.isUpdateModal = true;
    this.createUpdateForm();
  }

  closeUpdateModal() {
    this.showError = false;
    this.isUpdateModal = false;
    this.updateForm.reset();
  }

  openDeleteModal(polyclinic: GetByIdPolyclinicDto) {
    this.polyclinic = polyclinic;
    this.isDeleteModal = true;
  }

  closeDeleteModal() {
    this.isDeleteModal = false;
  }

  createAddForm() {
    this.addForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  }

  createUpdateForm() {
    this.updateForm = new FormGroup({
      id: new FormControl(this.polyclinic.id, Validators.required),
      name: new FormControl(this.polyclinic.name, [Validators.required, Validators.minLength(3)])
    })
  }


  changePageIndex(index: number) {
    this.pageRequest.pageIndex = index;
    this.getList();
  }

  changePageSize(size: number) {
    this.pageRequest.pageSize = size;
    this.getList();
  }

}
