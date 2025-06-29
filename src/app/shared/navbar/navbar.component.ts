import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from './navbar.service';
import {Subscription } from 'rxjs';
import { HeadingService } from '../services/heading/heading.service';
import { AuthService } from '../services/authentication/auth.service';
@Component({
  selector: 'app-navbar',
  imports: [MatSidenavModule,
            CommonModule,
            MatToolbarModule,
           ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone:true
})
export class NavbarComponent {
  userDetails: any;
  currentHeading:string = ''; //strore current heading//
  currentRole:string='';
  private headingSubscription!:Subscription;
  constructor(private service:NavbarService,
    private cookieservice:CookieService,
    private headingService:HeadingService,
    private authService:AuthService,
    ){}

  ngOnInit(): void {
    this.getUser();
    this.headingSubscription = this.headingService.currentHeading$.subscribe(heading=>{
        this.currentHeading = heading; //update heading on navbar when it changes//
    });

    //call authservice to change the role
    this.authService.getRole().subscribe(role=>{
    this.currentRole = role;
    })
  }
 ngOnDestroy():void{
    if(this.headingSubscription){
      this.headingSubscription.unsubscribe(); // clean up subscription to avoid memory leaks//
    }
 }
  getUser(){
    const userId= this.cookieservice.get('userId');
    this.service.getUserDetails(userId).subscribe((res: any)=>{
      this.userDetails = res;
    })

  }


}
