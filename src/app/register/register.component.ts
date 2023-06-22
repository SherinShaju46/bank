import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 

export class RegisterComponent {
  acno: any;
  uname: any;
  psw: any;
  constructor(private route: Router) { }

  register() {
    this.route.navigateByUrl("home")
    console.log(this.acno, this.uname, this.psw);
    alert("register works")
  }
}




















33