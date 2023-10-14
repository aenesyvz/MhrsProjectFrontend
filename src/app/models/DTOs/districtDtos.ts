export interface CreateDistrictDto {
    cityId: string;
    name: string;
}

export interface UpdateDistrictDto {
    id: string,
    cityId: string,
    name: string
}

export interface GetByIdDistrictDto {
    id: string,
    cityId: string,
    cityName: string,
    name: string
}

export interface GetListDistrictDto {
    id: string,
    cityId: string,
    cityName: string,
    name: string
}

export interface GetListDistrictByDynamicDto {
    id: string,
    cityId: string,
    cityName: string,
    name: string
}