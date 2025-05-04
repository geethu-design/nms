import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { projectListPayload, punchInPayload } from './punch-in-dialog.type';

@Injectable({
  providedIn: 'root'
})
export class PunchInService {

  constructor(private http:HttpClient) { }

  getProjects(payload:projectListPayload){
     return this.http.post<any>(`${environment.apiUrl}/api/v1/pm/project/search`,payload);
  }
  getTasks(payload:any){
     return this.http.post<any>(`${environment.apiUrl}/api/v1/pm/task/search`,payload);
  }
  postPunchIn(payload:punchInPayload){
     return this.http.post<any>(`${environment.apiUrl}/api/v1/punch/punchIn`,payload);
  }
}
          
