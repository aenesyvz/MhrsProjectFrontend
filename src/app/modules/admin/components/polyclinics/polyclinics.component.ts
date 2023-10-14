import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { GetByIdPolyclinicDto, GetListPolyclinicDto } from 'src/app/models/DTOs/polyclinicDtos';
import { PolyclinicService } from 'src/app/services/polyclinic.service';

@Component({
  selector: 'app-polyclinics',
  templateUrl: './polyclinics.component.html',
  styleUrls: ['./polyclinics.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class PolyclinicsComponent implements OnInit {
  polyclinicsList: GetListPolyclinicDto[];
  polyclinic: GetByIdPolyclinicDto;

  addForm: FormGroup;
  updateForm: FormGroup;

  id: string;
  name: string;

  pageIndex: number = 0;
  pageSize: number = 10;
  pageRequest: PageRequest = { pageIndex: this.pageIndex, pageSize: this.pageSize };

  isAddModal: boolean = false;
  isUpdateModal: boolean = false;
  isDeleteModal: boolean = false;

  showError: boolean = false;

  constructor(
    private polyclinicService: PolyclinicService
  ) { }


  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.polyclinicService.getList(this.pageRequest).subscribe((response) => {
      this.polyclinicsList = response.items;

    })


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
        this.addForm.reset();
        this.getList();
      });
    }
  }

  update() {
    if (this.updateForm.valid) {
      let polyclinic = Object.assign({}, this.updateForm.value);

      this.polyclinicService.update(polyclinic).subscribe((response) => {
        this.closeUpdateModal();
        this.getList();
      });
    }
  }

  delete(id: string) {
    this.polyclinicService.delete(id).subscribe((response) => {
      this.getList();
      this.closeDeleteModal();
    })
  }


  openAddModal() {
    this.isAddModal = true;
    this.createAddForm();
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
      name: new FormControl("", Validators.required)
    })
  }

  createUpdateForm() {
    this.updateForm = new FormGroup({
      id: new FormControl(this.polyclinic.id, Validators.required),
      name: new FormControl(this.polyclinic.name, Validators.required)
    })
  }

}
