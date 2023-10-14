import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicQuery } from 'src/app/core/utilities/dynamicQuery';
import { SelectTagItemModel } from 'src/app/core/utilities/selectTagItemModel';
import { CityService } from 'src/app/services/city.service';
import { DistrictService } from 'src/app/services/district.service';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css', '../../../admin-common.css']
})
export class UpdateHospitalComponent implements OnInit {
  validationSchema: ValidateSchema = new ValidateSchema();

  cityList: SelectTagItemModel[] = [];
  districtList: SelectTagItemModel[] = [];
  classList: SelectTagItemModel[] = [
    { key: "A Sınıfı", value: "A" },
    { key: "B Sınıfı", value: "B" },
    { key: "C Sınıfı", value: "C" }
  ]

  updateForm: FormGroup;

  id: string;
  name: string;
  class: string;
  latitude: number;
  longitude: number;
  cityId: string;
  districtId: string;
  address: string;

  dynamicQuery: DynamicQuery;

  showError: boolean = false;

  constructor(
    private cityService: CityService,
    private districtService: DistrictService) { }

  ngOnInit(): void {
    this.createForms();
    this.getAllCity();

    this.updateForm.get('cityId')?.valueChanges.subscribe((cityId) => {
      this.getAllDistrictByCityId(cityId);
    });
  }

  update() {
    this.showError = true;
  }

  createForms() {
    this.updateForm = new FormGroup({
      name: new FormControl("", Validators.required),
      class: new FormControl("-1", [Validators.required, Validators.min(1)]),
      latitude: new FormControl(0, Validators.required),
      longitude: new FormControl(0, Validators.required),
      cityId: new FormControl("-1", [Validators.required, Validators.min(1)]),
      districtId: new FormControl("-1", [Validators.required, Validators.min(1)]),
      address: new FormControl("", Validators.required),
    });
  }

  getAllCity() {
    this.cityService.getList().subscribe((response) => {
      response.forEach(element => {
        console.log(element.name);

      });

      response.forEach(element => {
        this.cityList.push({ key: element.name, value: element.id })
      });
    });
  }

  getAllDistrictByCityId(cityId: string) {
    this.districtList = [];
    if (cityId !== "-1") {
      this.districtService.getListByDynamic(
        {
          sort: [],
          filter: {
            field: "cityId",
            operator: "eq",
            value: cityId,
            logic: "or",
            filters: []
          }
        }).subscribe((response) => {

          response.forEach(element => {
            console.log(element);

            this.districtList.push({ key: element.name, value: element.id })
          });
        });
    }
    this.updateForm.get('districtId')!.setValue('-1');

  }

}
