import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule], // imports needed in order to create reactive form
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
    line_1: new FormControl('', [Validators.required]),
    line_2: new FormControl('', [Validators.required]),
    line_3: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required, Validators.pattern(/^d{6}$/)]),
  })

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }
  get phone() {
    return this.signUpForm.get('phone');
  }
  get line_1() {
    return this.signUpForm.get('line_1');
  }
  get line_2() {
    return this.signUpForm.get('line_2');
  }
  get line_3() {
    return this.signUpForm.get('line_3');
  }
  get zip() {
    return this.signUpForm.get('zip');
  }

  onSubmit() {

  }

}
