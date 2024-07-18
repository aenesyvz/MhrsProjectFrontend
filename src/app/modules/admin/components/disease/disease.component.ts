import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { SelectTagItemModel } from 'src/app/core/utilities/selectTagItemModel';
import { GetListDiseaseDto } from 'src/app/models/DTOs/diseaseDto';
import { GetListPolyclinicDto } from 'src/app/models/DTOs/polyclinicDtos';
import { DiseaseService } from 'src/app/services/disease.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PolyclinicService } from 'src/app/services/polyclinic.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class DiseaseComponent implements OnInit {
  diseaseList: GetListDiseaseDto[];
  disease: GetListDiseaseDto;

  polyclinicList: SelectTagItemModel[] = [];

  addForm: FormGroup;
  updateForm: FormGroup;

  id: string;
  polyclinicId: string;
  name: string;

  isOpenAddModal: boolean = false;
  isOpenUpdateModal: boolean = false;

  pageIndex: number = 0;
  pageSize: number = 10
  pageRequest: PageRequest = { pageIndex: this.pageIndex, pageSize: this.pageSize }

  showError: boolean = false;

  polyclinicIdValidationSchema: Record<string, string> = {
    required: "Lütfen bir polikinik seçiniz",
  }

  diseaseNameValidationSchema: Record<string, string> = {
    required: "Lütfen hastalık adını giriniz",
    minlength: "En az üç karakter olmalıdır"
  }


  constructor(
    private diseaseService: DiseaseService,
    private polyclinicService: PolyclinicService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getList();
    this.getListPolyclinic();
  }

  getList() {
    this.diseaseService.getList(this.pageRequest).subscribe((response) => {
      this.diseaseList = response.items;
    }, (error) => {
      this.notificationService.warningNotification("Hastalıklar getirilemedi!");
    });
  }

  getListPolyclinic() {
    this.polyclinicService.getList({ pageIndex: 0, pageSize: 1000 }).subscribe((response) => {
      response.items.forEach(element => {
        this.polyclinicList.push({ key: element.name, value: element.id });
      })
    }, (error) => {
      this.notificationService.warningNotification("Polikinikler getirilemedi!");
    })
  }

  getById(id: number) {
    this.diseaseService.getById(id).subscribe((response) => {
      // this.disease = response;
    });
  }

  add() {
    if (this.addForm.valid) {
      let disease = Object.assign({}, this.addForm.value);
      this.diseaseService.add(disease).subscribe((response) => {
        this.closeAddModal();
        this.getList();
        this.notificationService.successNotification("Hastalık Eklendi!");
      }, (error) => {
        this.notificationService.errorNotification(error.statusText, "Hastalık Eklenemedi!");
      });
    } else {
      this.showError = true;
      this.notificationService.errorNotification("Ağğğanın formu düzgün doldursana");
    }
  }

  update() {
    if (this.updateForm.valid) {
      let disease = Object.assign({}, this.updateForm.value);
      this.diseaseService.update(disease).subscribe((response) => {
        this.closeUpdateModal();
        this.getList();
        this.notificationService.successNotification("Hastalık güncellendi!");
      }, (error) => {
        this.notificationService.errorNotification(error.statusText, "Hastalık Güncellenemedi!");
      })
    }
    else {
      this.showError = true;
      this.notificationService.warningNotification("Formu düzgün doldurun");
    }
  }

  delete(id: number) {
    this.diseaseService.delete(id).subscribe((response) => {
      this.getList();
      this.notificationService.successNotification("Hastalık silindi!")
    }, (error) => {
      this.notificationService.errorNotification(error.statusText, "Hastalık silinemedi!");
    })
  }

  openAddModal() {
    this.isOpenAddModal = true;
    this.createAddForm();
  }

  closeAddModal() {
    this.isOpenAddModal = false;
    this.showError = false;
    this.addForm.reset();
  }

  openUpdateModal(disease: GetListDiseaseDto) {
    this.isOpenUpdateModal = true;
    this.disease = disease;
    this.createUpdateForm();

  }

  closeUpdateModal() {
    this.isOpenUpdateModal = false;
    this.showError = false;
    this.updateForm.reset();
  }

  createAddForm() {
    this.addForm = new FormGroup({
      polyclinicId: new FormControl("", Validators.required),
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  createUpdateForm() {
    this.updateForm = new FormGroup({
      id: new FormControl(this.disease.id, Validators.required),
      polyclinicId: new FormControl(this.disease.polyclinicId, Validators.required),
      name: new FormControl(this.disease.name, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }
}
