import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 

export class RegisterComponent {
  // acno: any;
  // uname: any;
  // psw: any;
  constructor(private route: Router, private fb: FormBuilder) { }

  //forms model
  registerForm = this.fb.group({
    acno: [''],
    uname: [''],
    psw: [''],
    cpsw: [''],
  })

  register() {
    this.route.navigateByUrl("home")
    // console.log(this.acno, this.uname, this.psw);
    console.log(this.registerForm.value.uname);
    alert("register works")

    //to store data of registerForm
    var modelPath= this.registerForm.value;
    console.log(modelPath.acno);
    console.log(modelPath.uname);
    console.log(modelPath.psw);
    console.log(modelPath.cpsw);
  }
}




















33