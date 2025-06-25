import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PunchInDialogComponent } from "../punch-in-dialog/punch-in-dialog.component";
import { updatePunchinText,updateButtonText} from '../../shared/state/text.action';
import { Store } from '@ngrx/store';
import { PunchInService } from '../punch-in-dialog/punch-in-dialog.service';
import { projectListPayload } from '../punch-in-dialog/punch-in-dialog.type';
import { CookieService } from 'ngx-cookie-service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-punch-in',
  imports: [
    MatDialogModule,
    MatButtonModule,
    PunchInDialogComponent,
],
  standalone:true,
  templateUrl: './punch-in.component.html',
  styleUrl: './punch-in.component.scss'
})
export class DialogAnimationsExampleDialog implements OnInit {
  @ViewChild(PunchInDialogComponent) PunchInDialogComponent!:PunchInDialogComponent;
  projectNames:string[]=[];
  constructor(
    private store:Store,
    private service:PunchInService,
    private cookieService:CookieService
  ){}
  ngOnInit(): void {
    this.getProjects();
    throw new Error('Method not implemented.');
  }
  onSubmit(){
   this.store.dispatch(updatePunchinText({text:'You are Punched in'}));
   this.store.dispatch(updateButtonText({text:'Punch out'}));
    this.PunchInDialogComponent.onSubmit();
  }
   getProjects(){
   const userId = this.cookieService.get('userId');
    const payload:projectListPayload = {
        sortBy:{
            field:'',
            sortOrder:''
        },
        pagination:{
            page:0,
            size:50
        },
        data:{
            isArchived:false,
            isAssignee:true,
            isDeleted:false,
            keyword:'',
            userId:this.cookieService.get('userId')
        },
        filter:[]    
    }
     this.service.getProjects(payload).subscribe(res=>{
      this.projectNames = res.data[0].projectName.split(',').map((name: string)=>name.trim());
     })
  
   }
  
}
