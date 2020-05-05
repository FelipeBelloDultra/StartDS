import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  public produto: {};

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.apiService.getOneItem(param.id)
        .then((data) => {
          this.produto = data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

}
