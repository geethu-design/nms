import { Injectable } from '@angular/core';
import { punchboardStatusData } from '../punch-board/punch-board.type';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PunchBoardService {

  constructor(private http:HttpClient) { }


}

