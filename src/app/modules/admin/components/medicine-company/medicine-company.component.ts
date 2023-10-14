import { Component, OnInit } from '@angular/core';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { GetByIdMedicineCompanyDto, GetListMedicineCompanyDto } from 'src/app/models/DTOs/medicineCompanyDtos';
import { MedicineCompanyService } from 'src/app/services/medicine-company.service';

@Component({
  selector: 'app-medicine-company',
  templateUrl: './medicine-company.component.html',
  styleUrls: ['./medicine-company.component.css', "../../admin-common.css"]
})
export class MedicineCompanyComponent implements OnInit {
  medicineCompanyList: GetListMedicineCompanyDto[];
  medicineCompany: GetByIdMedicineCompanyDto;


  pageIndex: number = 0;
  pageSize: number = 10;
  pageRequest: PageRequest = { pageIndex: this.pageIndex, pageSize: this.pageSize };

  constructor(
    private medicineCompanyService: MedicineCompanyService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.medicineCompanyService.getList(this.pageRequest).subscribe((response) => {
      this.medicineCompanyList = response.items;
    })
  }

  getById(id: number) {
    this.medicineCompanyService.getById(id).subscribe((response) => {
      this.medicineCompany = response;
    })
  }
}
