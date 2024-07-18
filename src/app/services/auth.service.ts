import { Inject, Injectable } from '@angular/core';
import { UserRole } from '../core/entities/userRole';
import { Observable } from 'rxjs';
import { LoginResponseModel } from '../models/loginModel/loginResponseModel';
import { HttpClient } from '@angular/common/http';
import { LoginRequestModel } from '../models/loginModel/loginRequestModel';
import { BehaviorSubject } from 'rxjs';
import { AccessToken } from '../core/entities/accessToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  newPath = this.apiUrl + "Auth";

  private tokenSubject = new BehaviorSubject<AccessToken | null>(null);
  token$ = this.tokenSubject.asObservable();

  userId: number;
  userRole: UserRole[] = [];
  userName: string;

  setToken(token: AccessToken) {
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return this.tokenSubject.value !== null ? this.tokenSubject.value!.token : null;
  }

  login(loginRequestModel: LoginRequestModel): Observable<LoginResponseModel> {
    let api = this.newPath + "/Login";
    return this.httpClient.post<LoginResponseModel>(api, loginRequestModel);
  }

  patientRegister() {

  }

  isAuthenticated() {
    if (localStorage.getItem("user")) {
      return true;
    }
    return false;
  }
}
