export interface CreatePrescriptionDetailDto {
    prescriptionId: string,
    medicineId: string,
    description: string,
    dose: number,
    period: number,
    usageType: string,
    usegaeCount: number;
}

export interface UpdatePrescriptionDetailDto {
    id: string,
    prescriptionId: string,
    medicineId: string,
    description: string,
    dose: number,
    period: number,
    usageType: string,
    usegaeCount: number;
}

export interface GetByIdPrescriptionDetailDto {
    id: string,
    prescriptionId: string,
    medicineId: string,
    description: string,
    dose: number,
    period: number,
    usageType: string,
    usegaeCount: number;
}

export interface GetListPrescriptionDetailDto {
    id: string,
    prescriptionId: string,
    medicineId: string,
    description: string,
    dose: number,
    period: number,
    usageType: string,
    usegaeCount: number;
}