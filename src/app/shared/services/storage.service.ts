import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  constructor(private cookieservice:CookieService) { }
  saveAccessToken(access_token:string):void{
    this.cookieservice.set('access_token',access_token);
  }
  saveRefreshToken(refresh_token:string):void{
   this.cookieservice.set('refresh_token',refresh_token);
  }
  getAccessToken():string|null{
    return this.cookieservice.get('access_token');
  }
  getRefreshToken():string|null{
    return this.cookieservice.get('refresh_token');
  }
}
