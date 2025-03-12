
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ChangeDetectionStrategy} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';  
import {MatSelectModule} from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';  
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from '../shared/dropdown-search/dropdown-search.component';

interface Work {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-punch-in-dialog',
  imports: [MatDatepickerModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            FormsModule,
            MatSelectModule,
            NgxMatSelectSearchModule,
            MatCheckboxModule,
            ReactiveFormsModule,
            CommonModule,
            DropdownSearchComponent,
          ],
  templateUrl: './punch-in-dialog.component.html',
  styleUrl: './punch-in-dialog.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class PunchInDialogComponent {
   value="18:03";
   //work mode//
   selectedWorkMode!: string;
   workmodes: Work[] = [
    {value: 'wfo-0', viewValue: 'WFO'},
    {value: 'on-site-1', viewValue: 'On-Site'},
    {value: 'wfh-2', viewValue: 'WFH'},
    {value:'hybrid',viewValue: 'Hybrid'}
  ];
  //  // projects//
  // searchControl = new FormControl();
  // searchValue!:string;
  // selectedProject!:string;
  // options:string[]=['nms','kesher','e-commerce'];

  // filteredOptions:string[] = this.options;
  // constructor() {
  //   this.searchControl.valueChanges.subscribe(value => {
  //     this.filteredOptions = this.options.filter(option =>
  //       option.toLowerCase().includes(value.toLowerCase())
  //     );
  //   });
  // }
  //checkbox//
 // readonly checked = model(false);

}
