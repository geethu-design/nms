import { Injectable } from '@angular/core';
import { punchboardStatusData, PunchStatusResponse } from './punchboard_status.type';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PunchboardStatusService {

  constructor(private http:HttpClient) { }
  fetchStatusData(payload:punchboardStatusData, keyword=''):Observable<PunchStatusResponse>{
    let params = new HttpParams();
    params = params.set('keyword',keyword);
    return this.http.post<PunchStatusResponse>
    (`${environment.apiUrl}/api/v1/punch/punchBoard`,payload,{params: params});
}
}
