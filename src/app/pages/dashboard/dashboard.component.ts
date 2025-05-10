import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { CookieService} from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'; 
import { MatButtonModule} from '@angular/material/button';
import { DialogAnimationsExampleDialog } from '../punch-in/punch-in.component';
import { selectPunchinText,selectButtonState} from '../../shared/state/text.selector';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, 
            MatButtonModule,
            DialogAnimationsExampleDialog 
           ],
  templateUrl: './dashboard.component.html',
  standalone:true,
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit  {
  userDetails:any;
  punchinText$!:Observable<string>;
  buttonText$!:Observable<string>;
  constructor(
    private dialog:MatDialog,
    private store:Store
){
}
ngOnInit(): void {
  this.punchinText$ = this.store.pipe(select(selectPunchinText));
  this.buttonText$ = this.store.pipe(select(selectButtonState));
  console.log("buttontext",this.buttonText$);

}
  openDialog():void{
      this.dialog.open(DialogAnimationsExampleDialog,{
        'width':'400px',
        data:{message:'hello from pent'}
      });
  }
   
}
