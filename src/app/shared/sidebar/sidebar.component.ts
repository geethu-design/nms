import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule,
            MatListModule,
            MatIconModule,
            CommonModule,
            RouterOutlet,
            RouterModule,
            NavbarComponent,
            
           ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone:true
})
export class SidebarComponent {

}
