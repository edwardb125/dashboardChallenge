import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = 'erfanhematig@gmail.com';
  email = 'jfjfjf';

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    // if(!form.valid){
    //   return;
    // }
    // const email = form.value.email;
    // const password = form.value.password;
    console.log(form.value)
    form.reset();
  }
}
