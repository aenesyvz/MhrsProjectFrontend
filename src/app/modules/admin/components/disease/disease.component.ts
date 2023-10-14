import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { GetByIdDiseaseDto, GetListDiseaseDto } from 'src/app/models/DTOs/diseaseDto';
import { GetListPolyclinicDto } from 'src/app/models/DTOs/polyclinicDtos';
import { DiseaseService } from 'src/app/services/disease.service';
import { PolyclinicService } from 'src/app/services/polyclinic.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class DiseaseComponent implements OnInit {
  diseaseList: GetListDiseaseDto[];
  disease: GetListDiseaseDto;

  polyclinicList: GetListPolyclinicDto[];

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

  constructor(
    private diseaseService: DiseaseService,
    private polyclinicServcie: PolyclinicService
  ) { }

  ngOnInit(): void {
    this.getList();
    this.getListPolyclinic();
  }

  getList() {
    this.diseaseService.getList(this.pageRequest).subscribe((response) => {
      this.diseaseList = response.items;

    })
  }

  getListPolyclinic() {
    this.polyclinicServcie.getList({ pageIndex: 0, pageSize: 1000 }).subscribe((response) => {
      this.polyclinicList = response.items;
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
      });
    }
  }

  update() {
    if (this.updateForm.valid) {
      let disease = Object.assign({}, this.updateForm.value);
      console.log(disease);

      this.diseaseService.update(disease).subscribe((response) => {
        this.closeUpdateModal();
        this.getList();
      })
    }
    else {
      console.log(this.updateForm.value);


    }
  }

  delete(id: number) {
    this.diseaseService.delete(id).subscribe((response) => {
      this.getList();
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
