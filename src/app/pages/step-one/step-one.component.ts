import { Component, Input, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Gender {
  value: string;
  viewValue: string;
}
interface BloodGroup{
  value:string;
  viewValue: string;
}

@Component({
  selector: 'app-step-one',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
  standalone:true,
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class StepOneComponent implements OnInit{

  constructor(private router:Router){}

 @Input() formGroup!:FormGroup;
 genders: Gender[] = [
  {value: 'male', viewValue: 'Male'},
  {value: 'female', viewValue: 'Female'},
  {value: 'others', viewValue: 'Others'},
];
bloodGroups:BloodGroup[]=[
  {value: 'A+', viewValue:'A+'},  
  {value: 'A+', viewValue:'A-'},
  {value: 'A+', viewValue:'B+'},
  {value: 'A+', viewValue:'B-'},
  {value: 'A+', viewValue:'AB+'},
  {value: 'A+', viewValue:'AB-'},
]

 ngOnInit():void{

  this.formGroup.addControl('firstName', new FormControl('', Validators.required));
  this.formGroup.addControl('gender', new FormControl(''));
  this.formGroup.addControl('address', new FormControl(''));
  this.formGroup.addControl('ifsc', new FormControl(''));
  this.formGroup.addControl('esi_no', new FormControl(''));
  this.formGroup.addControl('lastName', new FormControl('',Validators.required));
  this.formGroup.addControl('personalMobileNumber',new FormControl('',Validators.required));
  this.formGroup.addControl('bloodGroup', new FormControl(''));
  this.formGroup.addControl('bankAccountNumber', new FormControl(''));
  this.formGroup.addControl('panNumber', new FormControl(''));
  this.formGroup.addControl('providentFundNumber', new FormControl(''));
  this.formGroup.addControl('dateOfBirth', new FormControl(''));
  this.formGroup.addControl('personalEmail', new FormControl('',Validators.required));
  this.formGroup.addControl('emergencyContact', new FormControl('',Validators.required));
  this.formGroup.addControl('bankName', new FormControl(''));
  this.formGroup.addControl('adhaarNumber', new FormControl(''));
  this.formGroup.addControl('medicalInsuranceNumber', new FormControl('')); 
}
fileUpload(){
  this.router.navigateByUrl('/file-upload');
}
}
