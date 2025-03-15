import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PunchInDialogComponent } from "../punch-in-dialog/punch-in-dialog.component";
@Component({
  selector: 'app-punch-in',
  imports: [
    MatDialogModule,
    MatButtonModule,
    PunchInDialogComponent
],
  standalone:true,
  templateUrl: './punch-in.component.html',
  styleUrl: './punch-in.component.scss'
})
export class DialogAnimationsExampleDialog {

}
