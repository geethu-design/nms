import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from './login.type';
import { environment } from './../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data: ILoginRequest){
           return this.http.post(`${environment.apiUrl}/api/v1/auth/login`,data);
  }
}
