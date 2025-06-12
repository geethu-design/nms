import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Teamlisting } from '../teams/teams.types';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }

getTeamList(data: Teamlisting.UserDataPayload, keyword = '') {
  let params = new HttpParams();
  params = params.set('keyword', keyword);
  return this.http.post<any>(
    `${environment.apiUrl}/api/v1/employee/getByColumns`,data,{params: params}
  );
}
   }
  