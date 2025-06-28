import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/authentication/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
  standalone:true
})
export class RoleComponent implements OnInit{

  currentRole:string='';
  
  constructor( private authservice:AuthService ){}

   ngOnInit(): void {
    this.currentRole = this.authservice.currentRole();
    this.authservice.getRole().subscribe(role=>{
    this.currentRole = role;
     });
       }

   switchRole(role: string){
    this.authservice.setRole(role);
   }
}
