import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {

  public listaBebida: any;
  public listaFiltrada = [];

  constructor(private apiService: ApiService, private router: Router) {
    setTimeout(() => {
      this.inicia();
    }, 2000);
  }

  public inicia() {
    this.listaFiltrada = this.listaBebida;
  }

  public handleClickShowDescription(id) {
    this.router.navigate([`/pages/description/${id}`]);
  }

  public buscaComida(event) {
    this.inicia();
    let busca: string = event.target.value;

    if (busca && busca.trim() !== '') {
      this.listaFiltrada = this.listaFiltrada.filter(item =>
        item.nome.toLowerCase().includes(busca.toLowerCase()))
    }
  }

  ngOnInit() {
    this.apiService.getAllBebidas()
      .then((data) => {
        this.listaBebida = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
