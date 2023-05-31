import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

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

  constructor(private ds: DataService){
    this.data="your perfect banking partner"
  }

  ngOnInit(): void {

  }

  login(){
    console.log(this.uname, this.psw);
    // alert(this.ds.sdata)
    alert(`${this.ds.checkData()} ${this.ds.sdata }`)
  }
}
