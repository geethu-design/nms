import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService:CookieService) { }

  isAuthenticated():boolean{
     const token = this.cookieService.get('access_token');
     return token?true:false;
  }

  logout(){
    this.cookieService.delete('access_token');
  }
  login(token:string):void{
    this.cookieService.set('access_token',token);
  }
}
