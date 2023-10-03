import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//global header for overload
const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //inject httpClient for api calls
  constructor(private http: HttpClient) { }

  getToken() {
    //create header
    const headers = new HttpHeaders()
    const token = JSON.parse(localStorage.getItem('token') || "")
    //checks if token is there in localStorage, otherwise it will give error
    if (token) {
      //append token to global header in options
      options.headers = headers.append('access_token', token)
    }
    return options
  }

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
    return this.http.get('http://localhost:3000/balance/' + acno, this.getToken())
  }

  //get single user data
  getUserApi(acno: any) {
    return this.http.get('http://localhost:3000/getUser/' + acno, this.getToken())
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
    return this.http.post('http://localhost:3000/transfer', body, this.getToken())
  }

  //api to get transaction history
  transactionHistory(acno: any) {
    return this.http.get('http://localhost:3000/transaction/' + acno, this.getToken())
  }

  deleteAccount(acno: any){
    return this.http.delete('http://localhost:3000/deleteacc/'+ acno, this.getToken())
  }

}

