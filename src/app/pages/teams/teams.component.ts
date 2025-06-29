import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TeamsService } from '../teams/teams.service';
import { Teamlisting } from '../teams/teams.types';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AuthService } from '../../shared/services/authentication/auth.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-teams',
  imports: [
    MatTableModule,
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './teams.component.html',
  standalone:true,
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit{
  length = 100;
  pageSize=10;
  pageSizeOptions:number[]=[5,10,25,100];
  searchControl = new FormControl('');
  displayedColumns: string[]=[]; 
  currentRole = '';

   teamList:any;
   payload:Teamlisting.UserDataPayload ={
    sortBy:{
      field:'',
      sortOrder:''
  },
  pagination:{
      page:0,
      size:10
  },
  filter:[] as Teamlisting.FilterPayload[],
  data:[
    'workEmail',
    'employeeCode',
    'workMobileNumber',
    'department',
  ]    
  }
     constructor(
      private teamsService:TeamsService,
      public authService:AuthService,
      private router:Router,
      private dialog:MatDialog,
     ){}
  ngOnInit(): void {
    this.getTeamListing();
    this.getFilteredData();
    this.authService.getRole().subscribe(role => {
      this.currentRole = role;
      this.displayedColumns =  ['employeeName','workEmail', 'employeeCode', 'workMobileNumber'];
      if (role === 'admin') {
        this.displayedColumns.push('department');
        this.displayedColumns.push('edit');
      }
    });
  }
  getTeamListing(searchTerm:string=''){
    this.teamsService.getTeamList(this.payload,searchTerm).subscribe((res:Teamlisting.teamResponse)=>{
      this.teamList= res.data;
      this.length = res.pagination.totalElements;
      });
  }
 getFilteredData(){
  this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged()).
    subscribe((searchTerm: string | null)=>{
      this.applyFilter(searchTerm);
    });

 }
 applyFilter(searchTerm:string| null){ 
    if(searchTerm && searchTerm.length>=3){
      this.payload.filter =[
      {field:'firstname',value:[searchTerm.trim()]},
      {field:'lastname',value:[searchTerm.trim()]},
      {field:'workEmail',value:[searchTerm.trim()]},
      {field:'employeeCode',value:[searchTerm.trim()]},
      {field: 'department.departmentName', value: [searchTerm.trim()] } 
      ];
      this.payload.filter = [];
      this.payload.pagination.page=0
      this.getTeamListing(searchTerm); 
    }
    else if((searchTerm === null || searchTerm.length<3) && this.payload.filter && this.payload.filter.length>0){
      this.payload.pagination.page = 0;
    }
    this.getTeamListing('');
 }

 onPageChange(event:PageEvent){
    console.log("pageEvent", event);
    this.pageSize = event.pageSize;
    this.payload.pagination.size = event.pageSize;
    this.payload.pagination.page = event.pageIndex;
    this.getTeamListing(this.searchControl.value || '');
 }
 addEmployee(){
  this.openDialog();
 }
 openDialog(){
  this.dialog.open(AddEmployeeComponent,
    {  panelClass: 'force-wide-dialog',
      maxWidth: 'none',
      autoFocus: true,
      restoreFocus: true,    
    }

  )
 }
 editEmployee(employee: any) {
  const dialogRef = this.dialog.open(AddEmployeeComponent, {
    panelClass: 'force-wide-dialog',
    maxWidth: 'none',
    autoFocus: true,
    restoreFocus: true,
    data: { employee }  
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'updated') {
      this.getTeamListing(this.searchControl.value || '');
    }
  });
}

}
