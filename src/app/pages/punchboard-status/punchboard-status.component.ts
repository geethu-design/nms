import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PunchboardStatusService } from '../punchboard-status/punchboard-status.service';
import { punchboardStatusData } from './punchboard_status.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punchboard-status',
  imports: [
    MatTableModule, 
    CommonModule
  ],
  templateUrl: './punchboard-status.component.html',
  styleUrl: './punchboard-status.component.scss',
  standalone:true
})
export class PunchboardStatusComponent implements OnInit {
  constructor(private punchboardService:PunchboardStatusService){}
  ngOnInit(): void {
    this.punchBoardStatus();
  }
  employeeList:any;
  displayedColumns: string[] = ['employee_name', 'department', 'in', 'out','work_mode','shift','status'];
  payload:punchboardStatusData={
    sortBy: {
      field: '',
      sortOrder: 'ASC'
    },
    pagination: {
      page: 0,
      size: 10
    },
    filter: []
  }
  
  punchBoardStatus(){
    this.punchboardService.fetchStatusData(this.payload,'').subscribe((res:any)=>{
      this.employeeList = res.data;
      console.log("employeeList",res);
    })
   }
}
