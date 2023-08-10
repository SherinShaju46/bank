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
    const body={
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/register', body)
  }

  //login api -- post
  loginApi(acno: any, psw: any){
    const body={
      acno,
      psw
    }
    return this.http.post('http://localhost:3000/login', body)
  }

  balanceApi(acno:any){
    return this.http.get('http://localhost:3000/balance/' + acno)
  }
}

