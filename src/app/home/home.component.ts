import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  date: any
  transactionMsg: any
  //for applying ngClass
  tStatus: any

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder, private datePipe: DatePipe) { }

  //model form
  moneyTransferForm = this.fb.group({
    toAcno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
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
      this.user = this.userDetail.uname,
        this.acno = this.userDetail.acno,
        this.balance = this.userDetail.balance,
        console.log(this.userDetail);
    })
  }

  //money transfer
  fundTransfer() {
    if (this.moneyTransferForm.valid) {
      //to generate current date
      this.date = new Date()
      //convert to short date format
      let newDate = this.datePipe.transform(this.date, 'short')
      // console.log(this.date);    
      this.acno = localStorage.getItem('currentAcno')
      let toAcno = this.moneyTransferForm.value.toAcno;
      let amount = this.moneyTransferForm.value.amount;
      let psw = this.moneyTransferForm.value.psw;
      if (this.acno == toAcno) {
        this.transactionMsg = "from acno and to acno cannot be same"
      }
      else {
        this.ds.fundTransfer(toAcno, this.acno, amount, psw, newDate).subscribe((result: any) => {
          console.log(result.message);
          this.transactionMsg = result.message + '!'
          this.tStatus = true
        },
          result => {
            console.log(result.error.message);
            this.transactionMsg = result.error.message + '!'
            this.tStatus= false
          })
      }
    }
    else {
      this.transactionMsg = "invalid form..!"
      this.tStatus= false
    }
  }

  //logout
  logout() {
    localStorage.removeItem("currentAcno")
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl("")
  }
}
