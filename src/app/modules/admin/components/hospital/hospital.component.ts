import { Component, OnInit } from '@angular/core';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { GetListHospitalDto } from 'src/app/models/DTOs/hospitalDtos';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css', "../../admin-common.css"]
})
export class HospitalComponent implements OnInit {
  hospitalList: GetListHospitalDto[];



  pageIndex: number = 0;
  pageSize: number = 0;
  pageRequest: PageRequest = { pageIndex: this.pageIndex, pageSize: this.pageSize };


  constructor(
    private hospitalServie: HospitalService,
  ) { }



  ngOnInit(): void {
    this.getAllHospital();
  }

  getAllHospital() {
    this.hospitalServie.getList(this.pageRequest).subscribe((response) => {
      this.hospitalList = response.items;
    })
  }


}
