import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //show password variable
  hide: boolean = true;
  passwordType: string = 'password';

  // toggle password visibilty
  public togglePassword() {
    if (this.hide === true) {
      this.hide = false;
      this.passwordType = 'text';
      console.log('text');
    } else {
      this.hide = true;
      this.passwordType = 'password';
      console.log('password');
    }
  }

  // login form values
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(false),
  });

  // login form values
  public loginFormSubmit() {
    console.log(this.loginForm.value);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
