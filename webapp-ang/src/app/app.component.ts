import { Component } from '@angular/core';

/* 'https://api.punkapi.com/v2/beers' */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cervejaSelecionada;

  onSelecionouCerveja(cerveja) {
    this.cervejaSelecionada = cerveja;
  }


}
