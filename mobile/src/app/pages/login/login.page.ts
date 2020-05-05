import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public senha: string;
  public erro: string;

  constructor(
    public apiService: ApiService,
    private storage: Storage,
    private router: Router
  ) { }

  public autenticar() {

    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    this.apiService.postSession(this.email, this.senha)
      .then((result: any) => {
        this.storage.set('access_token', result.access_token);
        this.storage.set('nome', result.cliente.nome);
        this.router.navigate(['/pages/home']);
      })
      .catch((error) => {
        if (error.status === 400) {
          this.erro = error.error.error;
          return;
        }
        this.email = '';
        this.senha = '';
        this.erro = 'Houve algum problema na autenticação.';
      });
  }

  ngOnInit() {
    this.storage.get('access_token')
      .then((data) => {
        if (data) {
          this.storage.remove('access_token');
          return;
        }
      })
      .catch((error) => {
        console.log(error)
      })
    this.storage.get('nome')
      .then((data) => {
        if (data) {
          this.storage.remove('nome');
          return;
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
