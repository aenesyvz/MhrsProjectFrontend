import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreatePrescriptionDto, GetByIdPrescriptionDto, GetListPrescriptionDto, UpdatePrescriptionDto } from '../models/DTOs/prescriptionDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Prescriptions";

  add(createPrescriptionDto: CreatePrescriptionDto): Observable<CreatePrescriptionDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreatePrescriptionDto>(api, createPrescriptionDto);
  }

  update(updatePrescriptionDto: UpdatePrescriptionDto): Observable<UpdatePrescriptionDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdatePrescriptionDto>(api, updatePrescriptionDto);
  }

  delete(id: number): Observable<GetByIdPrescriptionDto> {
    let api = `${this.newPath}/GetById/${id}`;
    return this.httpClient.delete<GetByIdPrescriptionDto>(api);
  }

  getById(id: number): Observable<GetByIdPrescriptionDto> {
    let api = `${this.newPath}/GetById/${id}`;
    return this.httpClient.get<GetByIdPrescriptionDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListPrescriptionDto>> {
    let api = `${this.newPath}/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListPrescriptionDto>>(api);
  }
}
