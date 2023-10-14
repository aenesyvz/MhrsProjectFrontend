import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateMedicineCompanyDto, GetByIdMedicineCompanyDto, GetByIdMedicineWithMedicinesDto, GetListMedicineCompanyDto, UpdateMedicineCompanyDto } from '../models/DTOs/medicineCompanyDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MedicineCompanyService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "MedicineCompanies";

  add(createMedicineCompanyDto: CreateMedicineCompanyDto): Observable<CreateMedicineCompanyDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateMedicineCompanyDto>(api, createMedicineCompanyDto);
  }

  update(updateMedicineCompanyDto: UpdateMedicineCompanyDto): Observable<UpdateMedicineCompanyDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateMedicineCompanyDto>(api, updateMedicineCompanyDto);
  }

  delete(id: number): Observable<GetByIdMedicineCompanyDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdMedicineCompanyDto>(api);
  }

  getById(id: number): Observable<GetByIdMedicineCompanyDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdMedicineCompanyDto>(api);
  }

  getByIdWithMedicines(id: number): Observable<GetByIdMedicineWithMedicinesDto> {
    let api = this.newPath + "/GetByIdWithMedicines/" + id;
    return this.httpClient.get<GetByIdMedicineWithMedicinesDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListMedicineCompanyDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListMedicineCompanyDto>>(api);
  }
}
