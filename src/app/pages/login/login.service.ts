import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from './login.type';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data: ILoginRequest){
           return this.http.post('http://13.200.132.41:7070/api/v1/auth/login',data);
  }
}
