import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateOperationClaimDto, DeleteOperationClaimDto, GetByIdOperationClaimDto, GetListOperationClaimDto, UpdateOperationClaimDto } from '../models/DTOs/operationClaimDtos';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "OperationClaims";

  add(createOperationClaimDto: CreateOperationClaimDto): Observable<CreateOperationClaimDto> {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreateOperationClaimDto>(api, createOperationClaimDto);
  }

  update(updateOperationClaimDto: UpdateOperationClaimDto): Observable<UpdateOperationClaimDto> {
    let api = this.newPath + "/Update";
    return this.httpClient.put<UpdateOperationClaimDto>(api, updateOperationClaimDto);
  }

  delete(deleteOperationClaimDto: DeleteOperationClaimDto): Observable<GetByIdOperationClaimDto> {
    let api = this.newPath + "/Delete";
    return this.httpClient.delete<GetByIdOperationClaimDto>(api, { body: deleteOperationClaimDto });
  }

  getById(id: number): Observable<GetByIdOperationClaimDto> {
    let api = this.newPath + "/GetById/" + id;
    return this.httpClient.get<GetByIdOperationClaimDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListOperationClaimDto>> {
    let api = this.newPath + `/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListOperationClaimDto>>(api);
  }
}
