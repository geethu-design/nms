import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TeamsService } from '../teams/teams.service';
import { Teamlisting } from '../teams/teams.types';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-teams',
  imports: [
    MatTableModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './teams.component.html',
  standalone:true,
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit{

  searchControl = new FormControl('');
  displayedColumns: string[] = ['employeeName','workEmail', 'employeeCode', 'workMobileNumber', 'department'];

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
      private teamsService:TeamsService
     ){}
  ngOnInit(): void {
    
    this.getTeamListing();
    this.getFilteredData();
  }
  getTeamListing(searchTerm:string=''){
    this.teamsService.getTeamList(this.payload,searchTerm).subscribe((res:Teamlisting.teamResponse)=>{
      this.teamList= res.data;
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
}
