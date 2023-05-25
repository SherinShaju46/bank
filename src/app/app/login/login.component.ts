import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data:string;
  constructor(){
    this.data="your perfect banking partner"
  }
  ngOnInit(): void {
    
  }
}
