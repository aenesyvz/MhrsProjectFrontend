import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreatePrescriptionDetailDto, GetByIdPrescriptionDetailDto, GetListPrescriptionDetailDto, UpdatePrescriptionDetailDto } from '../models/DTOs/prescriptionDetailDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionDetailService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "PrescriptionDetails";

  add(createPrescriptionDetailDto: CreatePrescriptionDetailDto): Observable<CreatePrescriptionDetailDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreatePrescriptionDetailDto>(api, createPrescriptionDetailDto);
  }

  update(updatePrescriptionDetailDto: UpdatePrescriptionDetailDto): Observable<UpdatePrescriptionDetailDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdatePrescriptionDetailDto>(api, updatePrescriptionDetailDto);
  }

  delete(id: number): Observable<GetByIdPrescriptionDetailDto> {
    let api = this.newPath + `/Delete/${id}`;
    return this.httpClient.delete<GetByIdPrescriptionDetailDto>(api);
  }

  getById(id: number): Observable<GetByIdPrescriptionDetailDto> {
    let api = this.newPath + `/GetById/${id}`;
    return this.httpClient.get<GetByIdPrescriptionDetailDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListPrescriptionDetailDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListPrescriptionDetailDto>>(api);
  }
}
