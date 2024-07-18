import { AccessToken } from "src/app/core/entities/accessToken";

export interface LoginResponseModel {
    accessToken: AccessToken;
    requiredAuthenticatorType: any;
}

