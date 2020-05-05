import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://192.168.1.7:3333/';

  public access_token: string;

  constructor(private httpClient: HttpClient, private storage: Storage) {
    this.storage.get('access_token')
      .then((data) => {
        console.log(data);
        this.access_token = data;
      })
      .catch((error) => {
        console.log(error)
      })
  }

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

  public getOneItem(id: any) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.URL_API}produtos/${id}`)
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

  public postCliente(nome: string, cpf: string, rua: string, bairro: string, cidade: string, estado: string, cep: string, email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.URL_API}clientes`, {
        nome, cpf, rua, bairro, cidade, estado, cep, email, senha
      })
        .subscribe((data: any) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  public postPedido(idProduto: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.access_token
      })
    };
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.URL_API}produtos/${idProduto}/pedido`, httpOptions)
        .subscribe((data: any) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

}
