import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  public listaComida: any;
  public listaFiltrada = [];

  constructor(private apiService: ApiService, private router: Router) {
    setTimeout(() => {
      this.inicia();
    }, 2000);
  }

  public inicia() {
    this.listaFiltrada = this.listaComida;
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
    this.apiService.getAllPratos()
      .then((data) => {
        this.listaComida = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
