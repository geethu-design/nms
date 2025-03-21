import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from './navbar.service';
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
  constructor(private service:NavbarService,
    private cookieservice:CookieService,
    ){}

  ngOnInit(): void {
    this.getUser();
  }
 
  getUser(){
    const userId= this.cookieservice.get('userId');
    this.service.getUserDetails(userId).subscribe((res: any)=>{
      this.userDetails = res;
    })

  }

}
