import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateHospitalDto, GetByIdHospitalDto, GetListHospitalDto, UpdateHospitalDto } from '../models/DTOs/hospitalDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';
import { DynamicQuery } from '../core/utilities/dynamicQuery';
import { GetListDoctorByDynamicDto } from '../models/DTOs/doctorDtos';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Hospitals";

  add(createHospitalDto: CreateHospitalDto): Observable<CreateHospitalDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateHospitalDto>(api, createHospitalDto);
  }

  update(updateHospitalDto: UpdateHospitalDto): Observable<UpdateHospitalDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateHospitalDto>(api, updateHospitalDto);
  }

  delete(id: number): Observable<GetByIdHospitalDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdHospitalDto>(api);
  }

  getById(id: number): Observable<GetByIdHospitalDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdHospitalDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListHospitalDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListHospitalDto>>(api);
  }

  getListByDynamic(dynamicQuery: DynamicQuery): Observable<GetListDoctorByDynamicDto[]> {
    let api = this.newPath + "/GetList/ByDynamic";
    return this.httpClient.post<GetListDoctorByDynamicDto[]>(api, dynamicQuery);
  }
}
