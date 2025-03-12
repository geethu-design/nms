import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';  

@Component({
  selector: 'app-dropdown-search',
  imports: [NgxMatSelectSearchModule,
            CommonModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule,
            MatSelectModule,
            FormsModule,
            ReactiveFormsModule
           ],
  templateUrl: './dropdown-search.component.html',
  styleUrl: './dropdown-search.component.scss'
})
export class DropdownSearchComponent {
   // projects//
   searchControl = new FormControl();
   searchValue!:string;
   selectedProject!:string;
   options:string[]=['nms','kesher','e-commerce'];
   filteredOptions:string[] = this.options;
   constructor() {
     this.searchControl.valueChanges.subscribe(value => {
       this.filteredOptions = this.options.filter(option =>
         option.toLowerCase().includes(value.toLowerCase())
       );
     });
   }
 
}
