import { CommonModule } from '@angular/common';
import { Component, Input,Output,EventEmitter } from '@angular/core';
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
   @Input() options:string[]=[];
   @Input() label:string='';
   @Input() selectedOption:string='';
   @Output() selectedOptionChange = new EventEmitter<string>;
   searchControl = new FormControl();
   searchValue!:string;
   selectedProject!:string;
   filteredOptions:string[] = this.options;
   constructor() {
     this.searchControl.valueChanges.subscribe(value => {
       this.filteredOptions = this.options.filter(option =>
         option.toLowerCase().includes(value.toLowerCase())
       );
     });
   }
 onSelectionChange(Value:string){
  this.selectedOption = Value;
     this.selectedOptionChange.emit(this.selectedOption);
 }
}
