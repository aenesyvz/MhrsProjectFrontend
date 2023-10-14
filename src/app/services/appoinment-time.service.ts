import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateAppoinmentTimeDto, GetByIdAppoinmentTimeDto, GetListAppoinmentTimeDto, UpdateAppoinmentTimeDto } from '../models/DTOs/appoinmentTimeDtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentTimeService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "AppointmentTimes";

  add(createAppoinmentTime: CreateAppoinmentTimeDto): Observable<CreateAppoinmentTimeDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateAppoinmentTimeDto>(api, createAppoinmentTime);
  }

  update(updateAppointmentTime: UpdateAppoinmentTimeDto): Observable<UpdateAppoinmentTimeDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateAppoinmentTimeDto>(api, updateAppointmentTime);
  }

  delete(id: number): Observable<GetByIdAppoinmentTimeDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdAppoinmentTimeDto>(api);
  }

  getById(id: number): Observable<GetByIdAppoinmentTimeDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdAppoinmentTimeDto>(api);
  }

  getList(): Observable<GetListAppoinmentTimeDto[]> {
    let api = this.newPath + "/GetList";
    return this.httpClient.get<GetListAppoinmentTimeDto[]>(api);
  }
}
