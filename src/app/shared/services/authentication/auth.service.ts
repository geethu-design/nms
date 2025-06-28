import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: string | null = null;
  refreshToken: string | null = null;

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
  restoreTokens() {
    this.accessToken = this.cookieService.get('access_token') || null;
    this.refreshToken = this.cookieService.get('refresh_token') || null;
    console.log('Restored tokens:', this.accessToken, this.refreshToken);
  }
   
  //role//
  private roleSubject = new BehaviorSubject<string>(this.getStoredRole());

  setRole(role: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('role', role);
    }
    this.roleSubject.next(role);
  }
  getRole():Observable<string>{
    return this.roleSubject.asObservable();
  }
  currentRole(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('role') || 'employee';
    }
    return 'employee';
  }
    isAdmin():boolean{
   return this.currentRole() === 'admin';
  }
  isEmployee():boolean{
    return this.currentRole() === 'employee';
  }
  private getStoredRole(): string {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('role') || 'employee';
    }
    return 'employee'; 
  }
  }
