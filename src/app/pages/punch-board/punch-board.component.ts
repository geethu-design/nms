import { Component, OnInit } from '@angular/core';
import { PunchBoardService } from '../punch-board/punch-board.service';
import { punchboardStatusData } from '../punch-board/punch-board.type';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { PunchboardStatusComponent } from "../punchboard-status/punchboard-status.component";
@Component({
  selector: 'app-punch-board',
  imports: [
    RouterModule,
    CommonModule,
    PunchboardStatusComponent
],
  templateUrl: './punch-board.component.html',
  styleUrl: './punch-board.component.scss',
  standalone:true
})
export class PunchBoardComponent implements OnInit {
   constructor(private punchboardService:PunchBoardService){}
  ngOnInit(): void {
    
  }
}
