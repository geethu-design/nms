import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-three',
  imports: [],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss',
  standalone:true
})
export class StepThreeComponent {
  @Input() step1Data!: any;
  @Input() step2Data!: any;

}
