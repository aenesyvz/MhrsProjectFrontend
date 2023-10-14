import { Component, OnInit } from '@angular/core';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { GetByIdMedicineDto, GetListMedicineDto } from 'src/app/models/DTOs/medicineDtos';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css', "../../admin-common.css"]
})
export class MedicineComponent implements OnInit {
  medicineList: GetListMedicineDto[];
  medicine: GetByIdMedicineDto;

  pageIndex: number = 0;
  pageSize: number = 10;
  pageRequest: PageRequest = { pageIndex: this.pageIndex, pageSize: this.pageSize };

  constructor(
    private medicineService: MedicineService
  ) { }

  ngOnInit(): void {
  }

  getList() {
    this.medicineService.getList(this.pageRequest).subscribe((response) => {
      this.medicineList = response.items;
    });
  }

  getById(id: number) {
    this.medicineService.getById(id).subscribe((response) => {
      this.medicine = response;
    })
  }

}
