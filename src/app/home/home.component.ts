import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any
  acno: any
  balance: any
  userDetail: any
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  //model form
  moneyTransferForm = this.fb.group({
    toAcno: [''],
    amount: [''],
    psw:['']
  })

  ngOnInit(): void {
    //to check if user is logged in
    if (!localStorage.getItem('currentAcno')) {
      this.router.navigateByUrl('')
      alert("please login")
    }
    this.user = localStorage.getItem('currentUser')
    // console.log(this.user);
  }

  getBalance() {
    this.acno = localStorage.getItem('currentAcno')
    this.ds.balanceApi(this.acno).subscribe((result: any) => {
      this.balance = result.message
      console.log(this.balance);
    })
  }

  viewAccount() {
    this.acno = localStorage.getItem('currentAcno')
    this.ds.getUserApi(this.acno).subscribe((result: any) => {
      this.userDetail = result.message
      console.log(this.userDetail);
    })
  }

  logout() {
    localStorage.removeItem("currentAcno")
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl("")
  }
}
