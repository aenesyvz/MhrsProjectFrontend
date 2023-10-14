import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateDiseaseDto, GetByIdDiseaseDto, GetListDiseaseDto, GetListDiseaseDynamicDto, UpdateDiseaseDto } from '../models/DTOs/diseaseDto';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Diseases";

  headers = new HttpHeaders({
    'Authorization': `Bearer ` + "" // Tokenınızı burada ekleyin
  });

  add(createDiseaseDto: CreateDiseaseDto): Observable<CreateDiseaseDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateDiseaseDto>(api, createDiseaseDto);
  }

  update(updateDiseaseDto: UpdateDiseaseDto): Observable<UpdateDiseaseDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateDiseaseDto>(api, updateDiseaseDto);
  }

  delete(id: number): Observable<GetByIdDiseaseDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdDiseaseDto>(api);
  }

  getById(id: number): Observable<GetByIdDiseaseDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdDiseaseDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListDiseaseDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListDiseaseDto>>(api, { headers: this.headers });
  }

  getListByDynamic(): Observable<GetListDiseaseDynamicDto[]> {
    let api = this.newPath + "/GetList/ByDynamic";
    return this.httpClient.get<GetListDiseaseDynamicDto[]>(api);
  }
}
