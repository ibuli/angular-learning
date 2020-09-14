import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validation';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _registrationService: RegistrationService
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidator(/password/),
          ],
        ],
        email: [''],
        subscribe: [false],
        password: [''],
        confirmPassword: [''],
        address: this.fb.group({
          city: [''],
          state: [''],
          postalCode: [''],
        }),
        alternateEmails: this.fb.array([]),
      },
      { validator: PasswordValidator }
    );

    this.registrationForm
      .get('subscribe')
      .valueChanges.subscribe((checkedValue) => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  // alternate way of doing manually
  // registrationForm = new FormGroup({
  //   username: new FormControl('Burhan'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   })
  // });

  // loadApiData() {
  //   this.registrationForm.patchValue({
  //     username: 'Burhan',
  //     password: 'test',
  //     confirmPassword: 'test',
  //     // address: {
  //     //   city: 'City',
  //     //   state: 'State',
  //     //   postalCode: '123456'
  //     // }
  //   })
  // }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value).subscribe(
      (response) => console.log('Success', response),
      (error) => console.log('Error', error)
    );
  }
}
