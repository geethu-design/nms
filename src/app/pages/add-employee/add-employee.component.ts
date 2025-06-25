import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StepOneComponent } from '../step-one/step-one.component';
import { StepTwoComponent } from '../step-two/step-two.component';
import { StepThreeComponent } from '../step-three/step-three.component';
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
export class AddEmployeeComponent {
 step1Form!:FormGroup;
 step2Form!:FormGroup;
//  step3Form!:FormGroup;
 @Input() step1Data!: any;
 @Input() step2Data!: any;
//  step2Data
//   = this.step2FormGroup.value;

 constructor(private fb: FormBuilder) {
  this.step1Form = this.fb.group({});
  this.step2Form = this.fb.group({});
  // this.step3Form = this.fb.group({});
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
}
