import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILoginRequest,ILoginResponse } from './login.type';
import { environment } from './../../../environments/environment'
import { map } from 'rxjs';
import { StorageService } from '../../shared/services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,
   private storageService:StorageService,
  ) { }

  login(data: ILoginRequest){
           return this.http.post<ILoginResponse>(`${environment.apiUrl}/api/v1/auth/login`,data)
           .pipe(map(response=>{
               const accessToken = response.data.accessToken;
               const refreshToken = response.data.refreshToken;
               this.storageService.saveAccessToken(accessToken);
               this.storageService.saveRefreshToken(refreshToken);
               
           }))
          
  }
}

