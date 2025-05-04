
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PunchInService } from '../../pages/punch-in-dialog/punch-in-dialog.service';
import { projectListPayload, taskListPayload } from '../../pages/punch-in-dialog/punch-in-dialog.type';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dropdown-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dropdown-search.component.html',
  styleUrl: './dropdown-search.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownSearchComponent,
      multi: true
    }
  ]
})
export class DropdownSearchComponent implements OnInit, ControlValueAccessor {

  @Input() options: string[] = [];
  @Input() label: string = '';
  @Input() selectedOption: string = '';
  @Output() selectedOptionChange = new EventEmitter<string>();

  searchControl = new FormControl();
  selectedOptionControl = new FormControl();

  filteredOptions: string[] = [];
  projectNames: string[] = [];
  taskNames: string[] = [];
  projectId: string = '';

  // Required for ControlValueAccessor
  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(
    private service: PunchInService,
    private cookieService: CookieService
  ) {
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredOptions = this.options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
    });
  }

  ngOnInit(): void {
    this.getProjects();
    this.getTasks();

    this.selectedOptionControl.setValue(this.selectedOption);
    this.selectedOptionControl.valueChanges.subscribe((value) => {
      this.selectedOption = value;
      this.selectedOptionChange.emit(value);
      this.onChange(value); // <-- Notify Angular form
      this.onTouched();     // <-- Mark as touched
    });
  }

  writeValue(obj: any): void {
    this.selectedOption = obj;
    this.selectedOptionControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.selectedOptionControl.disable() : this.selectedOptionControl.enable();
  }

  getProjects() {
    const payload: projectListPayload = {
      sortBy: { field: '', sortOrder: '' },
      pagination: { page: 0, size: 50 },
      data: {
        isArchived: false,
        isAssignee: true,
        isDeleted: false,
        keyword: '',
        userId: this.cookieService.get('userId')
      },
      filter: []
    };

    this.service.getProjects(payload).subscribe(res => {
      if (res.data?.length) {
        this.projectNames = res.data[0].projectName.split(',').map((name: string) => name.trim());
        this.projectId = res.data[0].projectId;
      }
    });
  }

  getTasks() {
    const payload: taskListPayload = {
      data: {
        isDeleted: false,
        keyword: '',
        projectId: this.projectId
      },
      filter: [],
      pagination: {
        page: 0,
        size: 3
      },
      sortBy: {
        field: '',
        sortOrder: ''
      }
    };

    this.service.getTasks(payload).subscribe(res => {
      this.taskNames = res.data.map((task: { taskName: string }) => task.taskName);
    });
  }

}
