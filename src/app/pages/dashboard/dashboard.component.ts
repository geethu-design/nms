import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { CookieService} from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  {
  userDetails:any;
  constructor(private service:DashboardService,private cookieservice:CookieService,){}

  ngOnInit(): void {
this.getUser();

  }
  getUser(){
    const userId= this.cookieservice.get('userId');
    console.log("userId",userId);

    this.service.getUserDetails(userId).subscribe((res: any)=>{
      this.userDetails = res;
    })

  }

   
}
