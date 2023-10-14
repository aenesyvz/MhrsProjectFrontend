import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateDoctorDto, GetByIdDoctorDto, GetListDoctorByDynamicDto, GetListDoctorDto, UpdateDoctorDto } from '../models/DTOs/doctorDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';
import { DynamicQuery } from '../core/utilities/dynamicQuery';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Doctors";

  add(createDoctorDto: CreateDoctorDto): Observable<CreateDoctorDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateDoctorDto>(api, createDoctorDto);
  }

  update(updateDoctorDto: UpdateDoctorDto): Observable<UpdateDoctorDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateDoctorDto>(api, updateDoctorDto);
  }

  delete(id: number): Observable<GetByIdDoctorDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdDoctorDto>(api);
  }

  getById(id: number): Observable<GetByIdDoctorDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdDoctorDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListDoctorDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListDoctorDto>>(api);
  }

  getListByDynamic(pageRequest: PageRequest, dynamicQuery: DynamicQuery): Observable<ListResponseWithPaginationModel<GetListDoctorByDynamicDto>> {
    let api = this.newPath + `/GetList/ByDynamic?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.post<ListResponseWithPaginationModel<GetListDoctorByDynamicDto>>(api, dynamicQuery);
  }
}
