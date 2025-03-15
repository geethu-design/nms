import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryComponent } from "../../shared/components/entry/entry.component";
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ILoginRequest } from './login.type';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  imports: [EntryComponent,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    rememberMe: new FormControl(false),
    retryCount: new FormControl(4)
  });
  constructor(private fb:FormBuilder,
    private loginService:LoginService,
    private router:Router
  ){
  }
  ngOnInit(): void {
   
  }
  getEmailControl(){
    return this.loginForm.controls['email'];
  }
  getPasswordControl(){
    return this.loginForm.controls['password'];
  }
   onLogin(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
  const email = this.loginForm.value.email!;
  const password = this.loginForm.value.password!;
  const rememberMe = this.loginForm.value.rememberMe;
  const retryCount= 2;
 
  const payload:ILoginRequest ={
    data:{
      username:email,
      password:password,
      retryCount:retryCount?.toString()
    }
  }
    this.loginService.login(payload).subscribe(res=>{
       this.router.navigate(['/sidebar/dashboard']);
    })

   }
}
