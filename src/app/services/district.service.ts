import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateDistrictDto, GetByIdDistrictDto, GetListDistrictByDynamicDto, UpdateDistrictDto } from '../models/DTOs/districtDtos';
import { Observable } from 'rxjs';
import { DynamicQuery } from '../core/utilities/dynamicQuery';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Districts";

  add(createDistrictDto: CreateDistrictDto): Observable<CreateDistrictDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateDistrictDto>(api, createDistrictDto);
  }

  update(updateDistrictDto: UpdateDistrictDto): Observable<UpdateDistrictDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateDistrictDto>(api, updateDistrictDto);
  }

  delete(id: number): Observable<GetByIdDistrictDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdDistrictDto>(api);
  }

  getById(id: number): Observable<GetByIdDistrictDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdDistrictDto>(api);
  }

  getListByDynamic(dynamicQuery: DynamicQuery): Observable<GetListDistrictByDynamicDto[]> {
    let api = `${this.newPath}/GetList/ByDynamic`;
    return this.httpClient.post<GetListDistrictByDynamicDto[]>(api, dynamicQuery);
  }
}
