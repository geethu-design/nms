import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EntryComponent } from '../../shared/components/entry/entry.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organisation-login',
  imports: [EntryComponent,
            MatInputModule,
            MatButtonModule
  ],
  templateUrl: './organisation-login.component.html',
  standalone: true,
  styleUrl: './organisation-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class OrganisationLoginComponent {
  constructor(private router:Router){}
  onSubmit(){
    console.log("submited");
    this.router.navigate(['/login']);
  }
}
