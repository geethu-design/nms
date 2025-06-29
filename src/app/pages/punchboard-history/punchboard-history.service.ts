import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { punchboardPayload } from '../punchboard-history/punchboard-history.type';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PunchboardHistoryService {

  constructor(private http:HttpClient) { }

  fetchPunchHistory(payload:punchboardPayload,keyword=''){
    let params = new HttpParams();
    params = params.set('keyword',keyword);
    return this.http.post(`${environment.apiUrl}/api/v1/punch/punchHistory`,payload,{params:params})
  }
}
