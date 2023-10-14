export interface CreateMedicineDto {
    medicineCompanyId: string,
    name: string,
    purposeOfUsage: string,
    sideEffects: string,
    conditionsToBeConsidired: string,
    termsOfUse: string,
    imageUrl: string
}

export interface UpdateMedicineDto {
    id: string,
    medicineCompanyId: string,
    name: string,
    purposeOfUsage: string,
    sideEffects: string,
    conditionsToBeConsidired: string,
    termsOfUse: string,
}

export interface GetByIdMedicineDto {
    id: string,
    medicineCompanyId: string,
    name: string,
    purposeOfUsage: string,
    sideEffects: string,
    conditionsToBeConsidired: string,
    termsOfUse: string,
}

export interface GetListMedicineDto {
    id: string,
    medicineCompanyId: string,
    name: string,
    purposeOfUsage: string,
    sideEffects: string,
    conditionsToBeConsidired: string,
    termsOfUse: string,
}