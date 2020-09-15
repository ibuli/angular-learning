import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  pageTitle = "Angular Component Interaction";
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  username: string;
  private _customerName: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef)
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if(value === "Burhan")
      alert('Hello Burhan')
  }

  incrementCount() {
    this.count += 1;
  }

  greetBurhan(updatedValue) {
    this.username = updatedValue
    if(updatedValue === "Burhan")
      alert('Welcome back Burhan')
  }
}
