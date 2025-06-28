import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeadingService } from '../../shared/services/heading/heading.service';
import { RoleComponent } from '../../pages/role/role.component';
@Component({
  selector: 'app-sidebar',
  imports: [
            MatSidenavModule,
            MatListModule,
            MatIconModule,
            CommonModule,
            RouterOutlet,
            RouterModule,
            NavbarComponent, 
            RoleComponent           
           ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone:true
})
export class SidebarComponent {

  constructor(private headingService:HeadingService){}
 //method for handling  sidebar click and update the heading on navbar through heading service//
  onSidebarItemClick(heading:string):void{
      this.headingService.updateHeading(heading); //update heading in the service//
  }
  roleEmployee(){
  console.log("employee");
  }
  roleAdmin(){  
    console.log("admin");

  }
}
