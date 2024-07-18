export interface CreatePatientRequestModel {
    nationalityId: string;
    firstName: string;
    lastName: string;
    gender: number;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
    password: string;
}