import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicQuery } from 'src/app/core/utilities/dynamicQuery';
import { GetListCityDto } from 'src/app/models/DTOs/cityDtos';
import { GetListDistrictByDynamicDto, GetListDistrictDto } from 'src/app/models/DTOs/districtDtos';
import { CityService } from 'src/app/services/city.service';
import { DistrictService } from 'src/app/services/district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class DistrictComponent implements OnInit {
  districtList: GetListDistrictByDynamicDto[];
  selectDistrict: GetListDistrictByDynamicDto;

  cityList: GetListCityDto[];

  addForm: FormGroup;
  updateForm: FormGroup;

  id: string;
  cityId: string;
  name: string;

  isOpenAddModal: boolean = false;
  isOpenUpdateModal: boolean = false;

  dynamicQuery: DynamicQuery;
  showError: boolean = false;

  constructor(
    private districtService: DistrictService,
    private cityService: CityService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['Id'];
    });
    this.getListByDynamic();
    this.getListCity();
  }

  getListByDynamic() {
    this.dynamicQuery = {
      sort: [
        {
          field: "name",
          dir: "asc"
        }
      ],
      filter: {
        field: "cityId",
        operator: "eq",
        value: this.cityId,
        logic: "or",
        filters: [],
      }
    }
    this.districtService.getListByDynamic(this.dynamicQuery).subscribe((response) => {
      this.districtList = response

    })
  }

  getListCity() {
    this.cityService.getList().subscribe((response) => {
      this.cityList = response;
    })
  }
  getById(id: number) {
    this.districtService.getById(id).subscribe((response) => {
      this.selectDistrict = response;
    })
  }

  add() {
    if (this.addForm.valid) {
      let district = Object.assign({}, this.addForm.value);

      this.districtService.add(district).subscribe((response) => {
        this.closeAddModal();
        this.getListByDynamic();
      })
    }
  }

  update() {

    if (this.updateForm.valid) {
      let district = Object.assign({}, this.updateForm.value);

      this.districtService.update(district).subscribe((response) => {
        this.closeUpdateModal();
        this.getListByDynamic();
      })
    }
  }

  delete(id: number) {
    this.districtService.delete(id).subscribe((response) => {
      this.getListByDynamic();
    })
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

  openUpdateModal(district: GetListDistrictDto) {
    this.isOpenUpdateModal = true;
    this.createUpdateForm(district);
  }

  closeUpdateModal() {
    this.isOpenUpdateModal = false;
    this.updateForm.reset();
    this.showError = false;
  }

  createAddForm() {
    this.addForm = new FormGroup({
      cityId: new FormControl(this.cityId, Validators.required),
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  createUpdateForm(district: GetListDistrictDto) {
    this.selectDistrict = district;
    this.updateForm = new FormGroup({
      id: new FormControl(district.id, Validators.required),
      cityId: new FormControl(district.cityId, Validators.required),
      name: new FormControl(district.name, [
        Validators.required,
        Validators.minLength(3)
      ])
    });


  }

}
