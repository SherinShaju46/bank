import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data:string;
  placeholderData ="Enter Account No"

   //variables to bind data from html form
  uname: any;
  psw: any;

  constructor(private rout: Router){
    this.data="your perfect banking partner"
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.uname, this.psw);
    this.rout.navigateByUrl('home')
  }
}
