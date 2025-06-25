
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ChangeDetectionStrategy} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';  
import {MatSelectModule} from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';  
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from '../../shared/dropdown-search/dropdown-search.component';
import { PunchInService } from './punch-in-dialog.service';
import { CookieService } from 'ngx-cookie-service';
import { punchInPayload } from './punch-in-dialog.type';

interface Work {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-punch-in-dialog',
  imports: [MatDatepickerModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            FormsModule,
            MatSelectModule,
            NgxMatSelectSearchModule,
            MatCheckboxModule,
            ReactiveFormsModule,
            CommonModule,
            DropdownSearchComponent,
          ],
  templateUrl: './punch-in-dialog.component.html',
  styleUrl: './punch-in-dialog.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class PunchInDialogComponent implements OnInit{

  form!:FormGroup;

  projectNames:string[]=[];
   value="18:03";
   //work mode//
   selectedWorkMode!: string;
   workmodes: Work[] = [
    {value: 'wfo-0', viewValue: 'WFO'},
    {value: 'on-site-1', viewValue: 'On-Site'},
    {value: 'wfh-2', viewValue: 'WFH'},
    {value:'hybrid',viewValue: 'Hybrid'}
  ];

  constructor(
    private fb:FormBuilder,
    private service:PunchInService,
    private cookieService:CookieService,
  ){}

  ngOnInit():void{
     this.form = this.fb.group({
      date:[null , Validators.required],
      value:['18.03'],
      workmode:['', Validators.required],
      project:['',Validators.required],
      task:['', Validators.required],
      description:['', Validators.required],
      enableTracking:[false]
 });
  }
  get projectControl(): FormControl {
    return this.form.get('project') as FormControl;
  }

  get taskControl(): FormControl{
    return this.form.get('task') as FormControl;
  }
   

  onSubmit() {
   const punchPayload:punchInPayload={
      data:{
        empId: this.cookieService.get('userId'),
        description: this.form.value.description,
        ignoreTask: false,
        isOnBreak: false,
        projectId: this.projectControl.value?.id?this.projectControl.value.id:null,
        punchInDateTime: this.form.value.punchInDateTime,
        punchLocation: this.form.value.punchLocation,
        shiftDate: this.form.value.shiftDate, 
        taskId:this.taskControl.value?.id?this.taskControl.value.id:null   
      }
    }
    if (this.form.valid) {      
      this.service.postPunchIn(punchPayload).subscribe(res=>{
        console.log("punchin res:",res);
      })
    }
    else{
      console.log("form invalid");
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        console.log(
          `${key} - value: ${control?.value}, valid: ${control?.valid}, errors:`,
          control?.errors
        );
      });
      this.form.markAllAsTouched();  
    }

    
  }
  
}
