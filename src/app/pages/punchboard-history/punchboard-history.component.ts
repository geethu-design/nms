import { Component, OnInit } from '@angular/core';
import { PunchboardHistoryService } from '../punchboard-history/punchboard-history.service';
import { punchboardPayload } from './punchboard-history.type';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-punchboard-history',
  imports: [ 
    CommonModule,
    MatTableModule
  ],
  templateUrl: './punchboard-history.component.html',
  styleUrl: './punchboard-history.component.scss',
  providers: [PunchboardHistoryService],
  standalone:true

})
export class PunchboardHistoryComponent implements OnInit{
  punchHistory:any[]=[];
  displayedColumns: string[] = ['employee_name', 'designation', 'in', 'out','work_mode','status'];

   payload:punchboardPayload ={
    sortBy:{
      field: '',
      sortOrder: 'ASC'
  },
  data: {
      startDate: '', 
      endDate: ''
  },
  filters: [],
  pagination:{
      page: 0, 
      size: 10
  }

  }
  constructor(
    private punchhistoryService:PunchboardHistoryService
  ){}
  ngOnInit(): void {
    this.fetchHistory();
  }

   fetchHistory(){
       this.punchhistoryService.fetchPunchHistory(this.payload,'')
       .subscribe((res:any)=>{
             this.punchHistory = res.data;
             console.log(this.punchHistory);
       })
   }
}
