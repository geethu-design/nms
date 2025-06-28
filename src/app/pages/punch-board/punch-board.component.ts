import { Component } from '@angular/core';
import { PunchBoardService } from '../punch-board/punch-board.service';
import { punchboardStatusData } from '../punch-board/punch-board.type';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-punch-board',
  imports: [
    RouterModule,
    CommonModule

  ],
  templateUrl: './punch-board.component.html',
  styleUrl: './punch-board.component.scss',
  standalone:true
})
export class PunchBoardComponent {
   constructor(private punchboardService:PunchBoardService){}
}
