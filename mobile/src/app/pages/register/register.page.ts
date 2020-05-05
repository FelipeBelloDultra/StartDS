import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public nome: string;
  public cpf: string
  public rua: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public cep: string;
  public email: string;
  public senha: string;
  public repetirSenha: string;

  public erro: string;

  constructor(
    public apiService: ApiService,
    private router: Router
  ) { }

  public cadastrar() {
    if (!this.nome || !this.cpf || !this.rua || !this.bairro || !this.cidade || !this.estado || !this.cep || !this.email || !this.senha || !this.repetirSenha) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    if (this.senha !== this.repetirSenha) {
      this.erro = 'As senhas devem ser iguais';
      return;
    }

    this.apiService.postCliente(this.nome, this.cpf, this.rua, this.bairro, this.cidade, this.estado, this.cep, this.email, this.senha)
      .then((result: any) => {
        if (result) {
          this.router.navigate(['/pages/login']);
        }
      })
      .catch((error) => {
        if (error.error.error === 'Esse usuário já existe.') {
          this.erro = 'Esse email já esta sendo usado, por favor, escolha outro!';
          return;
        }
        this.erro = 'Houve algum erro na hora de criar seu usuário.';
      });
  }

  ngOnInit() {
  }

}
