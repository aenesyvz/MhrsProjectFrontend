import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatePatientRequestModel } from "../models/patientModel/patientRequestModel"
import { CreatePatientResponeModel } from '../models/patientModel/patientResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath: string = this.apiUrl + "Patients";


  add(createPatientRequestModel: CreatePatientRequestModel) {
    let api = this.newPath + "/Add";
    return this.httpClient.post<CreatePatientResponeModel>(api, createPatientRequestModel);
  }
}
