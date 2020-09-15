import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  // @Input() loggedIn: boolean;
  // @Input('loggedIn') loginFlag: boolean; // used to change the local variable name
  // @Input('loggedIn') loginFlag = true; // default value

  // private _loggedIn: boolean;
  // message: string;

  // get loggedIn(): boolean {
  //   return this._loggedIn;
  // }

  // @Input()
  // set loggedIn(value: boolean) {
  //   this._loggedIn = value;
  //   if(value) {
  //     this.message = 'Welcome back Burhan'
  //   } else {
  //     this.message= 'Please log in'
  //   }
  // }

  // ngOnchanges method
  @Input() loggedIn: boolean;
  message: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    const loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue) {
      this.message = 'Welcome back Burhan';
    } else {
      this.message = 'Please log in'
    }
  }

  name = 'Burhan';

  greetBurhan() {
    alert('Hey Burhan!');
  }

}
