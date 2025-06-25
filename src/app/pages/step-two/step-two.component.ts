import { Component, Input, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormGroup, ReactiveFormsModule,FormControl, Validators  } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

interface Department {
  value: string;
  viewValue: string;
}
interface Buddy{
  value: string;
  viewValue: string;
}
interface EmploymentType{
  value:string;
  viewValue:string;
}
interface OfficeLocation{
  value:string;
  viewValue:string;
}
interface ProbationPeriodInMonth{
  value:number;
  viewValue:number;
}
interface Shift{
  value:string;
  viewValue:string;
}
interface Designation{
  value:string;
  viewValue:string;
}
interface EmploymentStatus{
  value:string;
  viewValue:string;

}
interface WorkMode{
  value:string;
  viewValue:string;

}


@Component({
  selector: 'app-step-two',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule, 
    ReactiveFormsModule,
    CommonModule,
    NgxMatSelectSearchModule
    
  ],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss',
  standalone:true
})
export class StepTwoComponent implements OnInit {
  @Input() formGroup!:FormGroup;
 
    constructor(){}  
    departments: Department[] = [
      {value: 'technical', viewValue: 'Technical'},
      {value: 'humanResource', viewValue: 'Human Resource'},
      {value: 'financial', viewValue: 'Financial'},
      {value: 'management', viewValue:'Management'},
      {value: 'qa', viewValue:'QA'},
      {value: 'design', viewValue:'Design'}     
    ];

    buddies:Buddy[] = [
      { value:'ss', viewValue:'ss'},
      { value:'nn', viewValue:'nn'},
      { value:'nm', viewValue:'nm'},
      { value:'nm', viewValue:'nm'}
    ];
    employmentTypes:EmploymentType[]=[
      { value:'Full Time', viewValue:'Full Time'},
      { value:'Part Time', viewValue:'Part Time'},
      { value:'Consultant', viewValue:'Consultant'},

    ];
    officeLocations:OfficeLocation[]=[
      { value:'kochi', viewValue:'Kochi'},
    ];
    probationPeriodInMonths:ProbationPeriodInMonth[]=[
      { value:3, viewValue:3},
      { value:6, viewValue:6}
    ];
    shifts:Shift[]=[
      { value:"9:00 - 18:00", viewValue:"9:00 - 18:00"},
      { value:"7:00 - 16:00", viewValue:"7:00 - 16:00"},
      { value:"14:00 - 22:00", viewValue:"14:00 - 22:00"},
      { value:"16:00 - 24:00", viewValue:"16:00 - 24:00"},
      { value:"18:00 - 2:00", viewValue:"18:00 - 2:00"}
     ];
     designations:Designation[]=[
      { value:"Trainee", viewValue:"Trainee"},
      { value:"softwareengineer", viewValue:"Software Engineer"},
      { value:"Scrummaster", viewValue:"Scrum master"},
      { value:"finance", viewValue:"Finance"},
      { value:"QA", viewValue:"QA"}
      ];
      employmentStatuses:EmploymentStatus[]=[
        { value:'trainee', viewValue:'Trainee'},
        { value:'onprobation', viewValue:'On Probation'},
        { value:'confirmed', viewValue:'Confirmed'}
      ];
      workModes:WorkMode[]=[
        { value:'WFO', viewValue:'WFO'},
        { value:'WFH', viewValue:'WFH'},
        { value:'Onsite', viewValue:'Onsite'},
        { value:'Hybrid', viewValue:'Hybrid'},
      ];
  
  ngOnInit(): void {
      // this.formGroup.addControl('workMobileNumber', new FormControl('', Validators.required));
      // this.formGroup.addControl('joiningDate', new FormControl(''));
      // this.formGroup.addControl('department', new FormControl('', Validators.required));
      // this.formGroup.addControl('employeeCode', new FormControl(''));
      // this.formGroup.addControl('dailyWorkingHours', new FormControl());
      // this.formGroup.addControl('workEmail', new FormControl('', Validators.required));  
      // this.formGroup.addControl('employmentType', new FormControl('')); 
      // this.formGroup.addControl('officeLocation', new FormControl('')); 
      // this.formGroup.addControl('probationPeriodInMonths', new FormControl());
      this.formGroup.addControl('shift', new FormControl('',Validators.required));
      this.formGroup.addControl('dateOfJoining', new FormControl(''));
      this.formGroup.addControl('designation', new FormControl('',Validators.required));
      this.formGroup.addControl('employmentStatus', new FormControl('',Validators.required));
      this.formGroup.addControl('ctc', new FormControl('',Validators.required));
      this.formGroup.addControl('workMode', new FormControl('',Validators.required));   
  }  
}
