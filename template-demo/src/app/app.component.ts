import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  username: string;
  private _customerName: string;
  isLike = false;
  isDisLike = false;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if (value === 'Burhan') {
      alert('Hello Burhan');
    }
  }

  incrementCount() {
    this.count += 1;
  }

   greetBurhan(updatedValue) {
    this.username = updatedValue;
    if (updatedValue === 'Burhan') {
      alert('Welcome back Burhan');
    }
  }

  likeImage() {
    this.isLike = !this.isLike;
    if (this.isLike) {
      this.isDisLike = false;
      alert('You have like image!!!');
    }
  }
  disLikeImage() {
    this.isDisLike = !this.isDisLike;
    if (this.isDisLike) {
      this.isLike = false;
      alert('You have dislike image!!!');
    }
  }
}
