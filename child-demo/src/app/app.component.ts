import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  userLoggedIn = false;

  // access child component's property using templarte reference
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  ngAfterViewInit() {
    this.childComponentRef.message = 'Message from parent component'
  }
}
