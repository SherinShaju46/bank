import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  })

  register() {
    if (this.registerForm.valid) {
      if(this.registerForm.value.psw==this.registerForm.value.cpsw){
        alert("register works")
        this.route.navigateByUrl("home")
      }
      else{
        alert("password doesn't match")
      }
    }
    else {
      alert("invalid form")
    }
  }
}

//on register
// console.log(this.acno, this.uname, this.psw);
//  console.log(this.registerForm.value.uname);
// //to store data of registerForm
// var modelPath= this.registerForm.value;
// console.log(modelPath.acno);
// console.log(modelPath.uname);
// console.log(modelPath.psw);
// console.log(modelPath.cpsw);

















33