import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data:string;
  placeholderData ="Enter Account No"

   //variables to bind data from html form
  // uname: any;
  // psw: any;

  constructor(private rout: Router, private fb: FormBuilder){
    this.data="your perfect banking partner"
  }

  ngOnInit(): void {
  }
  //forms model
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  })

  login(){
    // console.log(this.uname, this.psw);
    if(this.loginForm.valid){
      alert("login successful")
      this.rout.navigateByUrl('home')
    }
    else{
      alert("invalid login")
    }
  }
}
