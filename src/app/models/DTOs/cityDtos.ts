export interface CreateCityDto {
    plateCode: number,
    name: string
}

export interface UpdateCityDto {
    id: string,
    plateCode: number,
    name: string
}

export interface GetByIdCityDto {
    id: string,
    plateCode: number,
    name: string
}

export interface GetListCityDto {
    id: string
    plateCode: number,
    name: string
}