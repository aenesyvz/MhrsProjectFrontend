export interface CreatePrescriptionDto {
    patientId: string,
    hospitalId: string,
    doctorId: string
    prescriptionType: string
}

export interface UpdatePrescriptionDto {
    id: string,
    patientId: string,
    hospitalId: string,
    doctorId: string
    prescriptionType: string
}

export interface GetByIdPrescriptionDto {
    id: string,
    patientId: string,
    hospitalId: string,
    doctorId: string
    prescriptionType: string
}

export interface GetListPrescriptionDto {
    id: string,
    patientId: string,
    hospitalId: string,
    doctorId: string
    prescriptionType: string
}