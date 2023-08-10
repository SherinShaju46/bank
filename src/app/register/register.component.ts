import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  // acno: any;
  // uname: any;
  // psw: any;
  pswCheck:any= false;
  constructor(private route: Router, private fb: FormBuilder, private ds: DataService) { }

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
        //asynchronous function in TS
        this.ds.registerApi(
          this.registerForm.value.acno,
          this.registerForm.value.uname,
          this.registerForm.value.psw
          ).subscribe((result:any)=> {
            console.log(result);
            alert(result.message)
            this.route.navigateByUrl("")
          },
          result => {
            alert(result.error.message)
            this.route.navigateByUrl("")
          })
      }
      else{
        this.pswCheck=true
        // alert("password doesn't match")
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
