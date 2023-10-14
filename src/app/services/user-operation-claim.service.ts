import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateUserOperationClaimDto, DeleteUserOperationClaimDto, GetByIdUserOperationClaimDto, GetListUserOperationClaimDto, UpdateUserOperationClaimDto } from '../models/DTOs/userOperationClaimDtos';
import { Observable } from 'rxjs';
import { PageRequest } from '../core/utilities/pageRequest';
import { ListResponseWithPaginationModel } from '../core/utilities/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "UserOperationClaims";

  add(createUserOperationClaimDto: CreateUserOperationClaimDto): Observable<CreateUserOperationClaimDto> {
    let api = `${this.newPath}/Add`;
    return this.httpClient.post<CreateUserOperationClaimDto>(api, createUserOperationClaimDto);
  }

  update(updateUserOperationClaimDto: UpdateUserOperationClaimDto): Observable<UpdateUserOperationClaimDto> {
    let api = `${this.newPath}/Update`;
    return this.httpClient.put<UpdateUserOperationClaimDto>(api, updateUserOperationClaimDto);
  }

  delete(deleteUserOperationClaimDto: DeleteUserOperationClaimDto): Observable<GetByIdUserOperationClaimDto> {
    let api = `${this.newPath}/Delete`;
    return this.httpClient.delete<GetByIdUserOperationClaimDto>(api, { body: deleteUserOperationClaimDto });
  }

  getById(id: number): Observable<GetByIdUserOperationClaimDto> {
    let api = `${this.newPath}/GetById/${id}`;
    return this.httpClient.get<GetByIdUserOperationClaimDto>(api);
  }

  getList(pageRequest: PageRequest): Observable<ListResponseWithPaginationModel<GetListUserOperationClaimDto>> {
    let api = `${this.newPath}/GetList?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`;
    return this.httpClient.get<ListResponseWithPaginationModel<GetListUserOperationClaimDto>>(api);
  }
}
