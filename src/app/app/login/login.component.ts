import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data:string;
  placeholderData ="Enter Account No"
  constructor(){
    this.data="your perfect banking partner"
  }
  ngOnInit(): void {

  }
  login(){
    alert("login clicked")
  }

  unameChanged(event:any){
    console.log(event.target.value); 
  }
}
