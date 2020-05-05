import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://192.168.1.7:3333/';

  constructor(private httpClient: HttpClient) { }



  public getAllPratos() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.URL_API}produtos/tipo/1`)
        .subscribe((data: any) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public getAllDoces() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.URL_API}produtos/tipo/2`)
        .subscribe((data: any) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public getAllBebidas() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.URL_API}produtos/tipo/3`)
        .subscribe((data: any) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public postSession(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.URL_API}session`, { email, senha })
        .subscribe((data: any) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  // public postPedido() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Accept': 'application/json',
  //       'Authorization': 'Bearer ' + token
  //     })

  //   }
  //   return this.httpClient.post(URL_API, httpOptions);
  // }

}
