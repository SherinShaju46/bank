import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string;
  placeholderData = "Enter Account No"

  //variables to bind data from html form in template driven form
  // uname: any;
  // psw: any;

  //dependency inject Formbuilder
  constructor(private rout: Router, private fb: FormBuilder, private ds: DataService) {
    this.data = "your perfect banking partner"
  }

  ngOnInit(): void {
  }
  //form model
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  })

  login() {
    // console.log(this.uname, this.psw);
    if (this.loginForm.valid) {
      this.ds.loginApi(this.loginForm.value.acno, this.loginForm.value.psw).subscribe((result: any) => {
        console.log(result);
        alert(result.message);
        this.rout.navigateByUrl('home')
        localStorage.setItem('currentAcno', result.currentAcno)
        localStorage.setItem('currentUser', result.currentUser)
      },
        result => {
          alert(result.error.message)
        })
    }
    else {
      alert("invalid login form")
    }
  }
}
