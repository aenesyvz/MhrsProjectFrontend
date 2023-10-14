import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateCityDto, GetByIdCityDto, GetListCityDto, UpdateCityDto } from '../models/DTOs/cityDtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  private newPath: string = this.apiUrl + "Cities";

  add(createCityDto: CreateCityDto): Observable<CreateCityDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateCityDto>(api, createCityDto);
  }

  update(updateCityDto: UpdateCityDto): Observable<UpdateCityDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateCityDto>(api, updateCityDto);
  }

  delete(id: number): Observable<GetByIdCityDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdCityDto>(api);
  }

  getById(id: number): Observable<GetByIdCityDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdCityDto>(api);
  }

  getList(): Observable<GetListCityDto[]> {
    let api = this.newPath + "/GetList";
    return this.httpClient.get<GetListCityDto[]>(api);
  }
}
