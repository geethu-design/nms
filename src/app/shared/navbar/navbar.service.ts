import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(   
     private http:HttpClient
  ) { }
  getUserDetails(userId:string):any{
    const params = new HttpParams().set('userId', userId);
    return this.http.get(`${environment.apiUrl}/api/v1/employee/get?`,{params})}
}


