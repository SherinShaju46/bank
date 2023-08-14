import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //inject httpClient for api calls
  constructor(private http: HttpClient) { }

  //register api -- post
  registerApi(acno: any, uname: any, psw: any) {
    const body = {
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/register', body)
  }

  //login api -- post
  loginApi(acno: any, psw: any) {
    const body = {
      acno,
      psw
    }
    return this.http.post('http://localhost:3000/login', body)
  }

  balanceApi(acno: any) {
    return this.http.get('http://localhost:3000/balance/' + acno)
  }

  //get single user data
  getUserApi(acno: any) {
    return this.http.get('http://localhost:3000/getUser/' + acno)
  }

  //api fund transfer
  fundTransfer(toAcno: any, fromAcno: any, amount: any, psw: any, date: any) {
    const body = {
      toAcno,
      fromAcno,
      amount,
      psw,
      date
    }
    return this.http.post('http://localhost:3000/transfer', body)
  }
}

