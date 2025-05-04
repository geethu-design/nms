import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from './navbar.service';
import {Subscription } from 'rxjs';
import { HeadingService } from '../services/heading/heading.service';

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
  private headingSubscription!:Subscription;
  constructor(private service:NavbarService,
    private cookieservice:CookieService,
    private headingService:HeadingService,
    ){}

  ngOnInit(): void {
    this.getUser();
    this.headingSubscription = this.headingService.currentHeading$.subscribe(heading=>{
        this.currentHeading = heading; //update heading on navbar when it changes//
    });
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
