import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.page.html',
  styleUrls: ['./candy.page.scss'],
})
export class CandyPage implements OnInit {

  public listaDoce: any;
  public listaFiltrada = [];

  constructor(private apiService: ApiService, private router: Router) {
    setTimeout(() => {
      this.inicia();
    }, 2000);
  }

  public inicia() {
    this.listaFiltrada = this.listaDoce;
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
    this.apiService.getAllDoces()
      .then((data) => {
        this.listaDoce = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
