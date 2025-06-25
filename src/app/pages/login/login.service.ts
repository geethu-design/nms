import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILoginRequest,ILoginResponse } from './login.type';
import { environment } from './../../../environments/environment'
import { map } from 'rxjs';
import { StorageService } from '../../shared/services/storage.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,
   private storageService:StorageService,
   private cookieservice:CookieService,
  ) { }

  login(data: ILoginRequest){
           return this.http.post<ILoginResponse>(`${environment.apiUrl}/api/v1/auth/login`,data)
           .pipe(map(response=>{
               const accessToken = response.data.accessToken;
               const refreshToken = response.data.refreshToken;
               this.cookieservice.set('access_token',accessToken,{
                expires:1,
                path:'/',
                sameSite:'Lax',
                // secure:true,
                secure: window.location.protocol === 'https:'

               });
               this.cookieservice.set('refresh_token',refreshToken,{
                expires:7,
                path:'/',
                sameSite:'Lax',
                // secure:true
                secure: window.location.protocol === 'https:'

               });
              //  this.storageService.saveAccessToken(accessToken);
              //  this.storageService.saveRefreshToken(refreshToken);
              const decodedToken:any = jwt_decode(accessToken);
              const userId:string = decodedToken.userId;
               if(userId){
                this.cookieservice.set('userId',userId,
                  {
                    expires:1,
                    path:'/',
                    sameSite:'Lax',
                    // secure:true
                    secure: window.location.protocol === 'https:'
                  });
               }
               this.storageService.saveAccessToken(accessToken);
               this.storageService.saveRefreshToken(refreshToken);

           })) ;    
  }
}
//jwt decode of access token to get user id//
function jwt_decode(_accessToken: string): any {
  if (!_accessToken || _accessToken.split('.').length !== 3) {
    throw new Error('Invalid JWT token');
  }
  const base64Url = _accessToken.split('.')[1];//split in to three header,payload and signature//
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = JSON.parse(atob(base64));
  return decodedPayload;
}


