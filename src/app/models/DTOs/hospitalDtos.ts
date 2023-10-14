export interface CreateHospitalDto {
    name: string,
    class: string,
    latitude: number,
    longitude: number,
    cityId: string,
    districtId: string
}

export interface UpdateHospitalDto {
    id: string
    name: string,
    class: string,
    latitude: number,
    longitude: number,
    cityId: string,
    districtId: string
}

export interface GetByIdHospitalDto {
    id: string
    name: string,
    class: string,
    latitude: number,
    longitude: number,
    cityName: string,
    districtName: string
}

export interface GetListHospitalDto {
    id: string
    name: string,
    class: string,
    latitude: number,
    longitude: number,
    cityName: string,
    districtName: string
}

export interface GetListHospitalByDynamicDto {
    id: string
    name: string,
    class: string,
    latitude: number,
    longitude: number,
    cityName: string,
    districtName: string
}