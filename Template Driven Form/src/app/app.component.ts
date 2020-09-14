import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = ""
  userModel = new User(
    'Rob',
    'rob@test.com',
    5555555555,
    'default',
    'morning',
    true
  );

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;

    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('success', data),
      (error) => this.errorMsg = error.statusText
    );
  }
}
