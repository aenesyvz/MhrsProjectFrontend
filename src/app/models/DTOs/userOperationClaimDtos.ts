export interface CreateUserOperationClaimDto {
    userId: number,
    operationClaimId: number
}

export interface UpdateUserOperationClaimDto {
    id: number,
    userId: number,
    operationClaimId: number
}

export interface DeleteUserOperationClaimDto {
    id: number;
}

export interface GetByIdUserOperationClaimDto {
    id: number,
    userId: number,
    operationClaimId: number
}

export interface GetListUserOperationClaimDto {
    id: number,
    userId: number,
    operationClaimId: number
}