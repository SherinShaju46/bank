import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data:string;
  placeholderData ="Enter Account No"
  uname: any;
  psw: any;
  constructor(){
    this.data="your perfect banking partner"
  }
  ngOnInit(): void {

  }

  login(a: any, b:any){
    this.uname= a.value
    this.psw= b.value
    console.log(this.uname, this.psw);
    alert("login clicked")

  }

}
