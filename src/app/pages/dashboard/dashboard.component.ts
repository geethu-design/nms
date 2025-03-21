import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { CookieService} from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'; 
import { MatButtonModule} from '@angular/material/button';
import { DialogAnimationsExampleDialog } from '../punch-in/punch-in.component';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, 
            MatButtonModule,
            DialogAnimationsExampleDialog ,
                
           ],
  templateUrl: './dashboard.component.html',
  standalone:true,
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent  {
  userDetails:any;
  constructor(
    private dialog:MatDialog){}

  openDialog():void{
      this.dialog.open(DialogAnimationsExampleDialog,{
        'width':'400px',
        data:{message:'hello from pent'}
      });
  }
   
}
