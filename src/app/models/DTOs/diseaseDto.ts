export interface CreateDiseaseDto {
    polyclinicId: string,
    name: string
}

export interface UpdateDiseaseDto {
    id: string,
    polyclinicId: string,
    name: string
}

export interface GetByIdDiseaseDto {
    id: string,
    polyclinicName: string,
    name: string
}

export interface GetListDiseaseDto {
    id: string,
    polyclinicId: string,
    polyclinicName: string,
    name: string
}

export interface GetListDiseaseDynamicDto {
    id: string,
    polyclinicId: string,
    name: string
}