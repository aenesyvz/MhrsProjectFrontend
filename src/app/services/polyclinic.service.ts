import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreatePolyclinicDto, GetByIdPolyclinicDto, GetListPolyclinicDto, UpdatePolyclinicDto } from '../models/DTOs/polyclinicDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PolyclinicService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Polyclinics";

  add(createPolyclinicDto: CreatePolyclinicDto): Observable<CreatePolyclinicDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreatePolyclinicDto>(api, createPolyclinicDto);
  }

  update(updatePolyclinicDto: UpdatePolyclinicDto): Observable<UpdatePolyclinicDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdatePolyclinicDto>(api, updatePolyclinicDto);
  }

  delete(id: string): Observable<GetByIdPolyclinicDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdPolyclinicDto>(api);
  }

  getById(id: number): Observable<GetByIdPolyclinicDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdPolyclinicDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListPolyclinicDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListPolyclinicDto>>(api);
  }
}
