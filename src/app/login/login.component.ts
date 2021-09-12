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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
  }
}
