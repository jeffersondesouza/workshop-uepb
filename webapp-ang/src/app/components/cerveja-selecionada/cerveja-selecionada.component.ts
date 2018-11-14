import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cerveja-selecionada',
  templateUrl: './cerveja-selecionada.component.html',
  styleUrls: ['./cerveja-selecionada.component.css']
})
export class CervejaSelecionadaComponent {

  @Input() cerveja;
  imgUrl = 'https://images.punkapi.com/v2/keg.png';
  nome = 'Buzz';
  slogan = 'Reall Bitter Experience';

}
