import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetListCityDto, UpdateCityDto } from 'src/app/models/DTOs/cityDtos';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class CityComponent implements OnInit {
  cityList: GetListCityDto[];
  city: GetListCityDto;
  title: string;

  addForm: FormGroup;
  updateForm: FormGroup;

  plateCode: number;
  name: string;

  isOpenAddModal: boolean = false;
  isOpenUpdateModal: boolean = false;

  showError: boolean = false;

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.cityService.getList().subscribe((response) => {
      this.cityList = response;
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
        this.getList();
      });
    }
  }

  update() {
    if (this.updateForm.valid) {
      let city: UpdateCityDto = Object.assign({}, this.updateForm.value);
      console.log(city);


      this.cityService.update(city).subscribe((response) => {
        this.closeUpdateModal();
        this.getList();
      })
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
    this.title = "Yeni İl Ekle"
    this.addForm = new FormGroup({
      plateCode: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(81)
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
        Validators.max(81)
      ]),
      name: new FormControl(city.name, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

}
