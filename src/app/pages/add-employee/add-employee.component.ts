import { Component, Inject, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StepOneComponent } from '../step-one/step-one.component';
import { StepTwoComponent } from '../step-two/step-two.component';
import { StepThreeComponent } from '../step-three/step-three.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    StepOneComponent,
    StepTwoComponent, 
    StepThreeComponent
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  standalone:true,
  encapsulation: ViewEncapsulation.None 
})
export class AddEmployeeComponent implements OnInit {
 step1Form!:FormGroup;
 step2Form!:FormGroup;
//  step3Form!:FormGroup;
 @Input() step1Data!: any;
 @Input() step2Data!: any;
//  step2Data
//   = this.step2FormGroup.value;
employeeForm!: FormGroup;
isEditMode: boolean = false;


 constructor(
       private fb: FormBuilder,
       @Inject(MAT_DIALOG_DATA) public data: any
) {
  console.log('Received employee data:', data?.employee);  

  this.step1Form = this.fb.group({});
  this.step2Form = this.fb.group({});
  // this.step3Form = this.fb.group({});
 }
  ngOnInit(): void {
    this.initializeForms();

    if (this.data?.employee) {
      this.isEditMode = true;
      this.populateForms(this.data.employee);
    }
  }
onSubmit(){
  // if(this.step1Form.valid && this.step2Form.valid && this.step3Form.valid){
    if(this.step1Form.valid && this.step2Form.valid ){
    const data ={
      ...this.step1Form.value,
      ...this.step2Form.value,
      // ...this.step3Form.value
    };
    console.log("All form data:",data);
  }
  else{
    console.warn("invalid");
  }
}
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  initializeForms() {
    this.step1Form = this.fb.group({
      firstname: [''],
      lastname: ['']
    });
  
    this.step2Form = this.fb.group({
      workEmail: [''],
      employeeCode: [''],
      workMobileNumber: [''],
      department: ['']
    });
  }
  
  populateForms(employee: any) {
    this.step1Form.patchValue({
      firstname: employee.firstname || '',
      lastname: employee.lastname || '',
      
    });
  
    this.step2Form.patchValue({
      workEmail: employee.workEmail || '',
      employeeCode: employee.employeeCode || '',
      workMobileNumber: employee.workMobileNumber || '',
      department: employee.department?.departmentName || ''
    });
    }

}
