export interface CreateOperationClaimDto {
    name: string,
}

export interface UpdateOperationClaimDto {
    id: number,
    name: string
}

export interface DeleteOperationClaimDto {
    id: number;
}

export interface GetByIdOperationClaimDto {
    id: number,
    name: string
}

export interface GetListOperationClaimDto {
    id: number,
    name: string
}