import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateMedicineDto, GetByIdMedicineDto, GetListMedicineDto, UpdateMedicineDto } from '../models/DTOs/medicineDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Medicines";

  add(createMedicineDto: CreateMedicineDto): Observable<CreateMedicineDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateMedicineDto>(api, createMedicineDto);
  }

  update(updateMedicineDto: UpdateMedicineDto): Observable<UpdateMedicineDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateMedicineDto>(api, updateMedicineDto);
  }

  delete(id: number): Observable<GetByIdMedicineDto> {
    let api = this.newPath + "/Delete/" + id;
    return this.httpClient.delete<GetByIdMedicineDto>(api);
  }

  getById(id: number): Observable<GetByIdMedicineDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdMedicineDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListMedicineDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListMedicineDto>>(api);
  }
}
