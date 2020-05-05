import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private storage: Storage, ) { }

  ngOnInit() {
    this.storage.get('access_token')
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error)
      })
    this.storage.get('nome')
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
