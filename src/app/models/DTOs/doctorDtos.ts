export interface CreateDoctorDto {
    userId: number,
    hospitalId: string,
    polyclinicId: string,
    nationalityNumber: string,
    degree: string,
    dateOfBirth: Date,
    imageUrl: string
}

export interface UpdateDoctorDto {
    id: string,
    userId: number,
    hospitalId: string,
    polyclinicId: string,
    nationalityNumber: string,
    degree: string,
    dateOfBirth: Date,
    imageUrl: string
}

export interface GetByIdDoctorDto {
    id: string,
    userId: number,
    userFirstName: string,
    userLastName: string,
    userEmail: string,
    hospitalName: string,
    polyclinicName: string,
    nationalityNumber: string,
    degree: string,
    dateOfBirth: Date,
    imageUrl: string
}

export interface GetListDoctorDto {
    id: string,
    userId: number,
    userFirstName: string,
    userLastName: string,
    userEmail: string,
    hospitalName: string,
    polyclinicName: string,
    nationalityNumber: string,
    degree: string,
    dateOfBirth: Date,
    imageUrl: string
}

export interface GetListDoctorByDynamicDto {
    id: string,
    userId: number,
    userFirstName: string,
    userLastName: string,
    userEmail: string,
    hospitalName: string,
    polyclinicName: string,
    nationalityNumber: string,
    degree: string,
    dateOfBirth: Date,
    imageUrl: string
}