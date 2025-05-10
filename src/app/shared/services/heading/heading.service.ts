import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  private currentHeadingsubject$ = new BehaviorSubject<string>('Default heading'); //create a  behaviour subject to hold current heading//
  currentHeading$ = this.currentHeadingsubject$ //expose an observable for the current heading//

  constructor() { }
     updateHeading(newHeading:string):void{    // method to update heading//
       this.currentHeadingsubject$.next(newHeading);
     }
}
//BehaviorSubject is used because it allows you to emit new values to all subscribers. It also keeps track of the most recent value, so any new subscriber gets the current heading immediately upon subscribing.//
