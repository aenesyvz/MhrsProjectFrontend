import { GetByIdMedicineDto } from "./medicineDtos";

export interface CreateMedicineCompanyDto {
    name: string,
    address: string,
    email: string,
    phoneNumber: string,
    taxOffice: string,
    taxNumber: string,
    imageUrl: string
}

export interface UpdateMedicineCompanyDto {
    id: string,
    name: string,
    address: string,
    email: string,
    phoneNumber: string,
    taxOffice: string,
    taxNumber: string,
    imageUrl: string
}

export interface GetByIdMedicineCompanyDto {
    id: string,
    name: string,
    address: string,
    email: string,
    phoneNumber: string,
    taxOffice: string,
    taxNumber: string,
    imageUrl: string
}

export interface GetByIdMedicineWithMedicinesDto {
    id: string,
    name: string,
    address: string,
    email: string,
    phoneNumber: string,
    taxOffice: string,
    taxNumber: string,
    imageUrl: string
    medicines: GetByIdMedicineDto[];
}

export interface GetListMedicineCompanyDto {
    id: string,
    name: string,
    address: string,
    email: string,
    phoneNumber: string,
    taxOffice: string,
    taxNumber: string,
    imageUrl: string
}