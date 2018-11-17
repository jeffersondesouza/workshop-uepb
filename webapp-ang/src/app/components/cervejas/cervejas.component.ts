import { Component, OnInit, Output, EventEmitter, AfterContentInit, AfterViewInit } from '@angular/core';
import { CervejaApiService } from '../../services/cerveja-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-cervejas',
  templateUrl: './cervejas.component.html',
  styleUrls: ['./cervejas.component.css']
})
export class CervejasComponent implements OnInit {

  cervejasLista;
  cervejasListaFiltrada = [];

  @Output() selecionouCerveja = new EventEmitter();

  constructor(
    private cervejaApi: CervejaApiService
  ) {

  }

  ngOnInit() {

    this.cervejaApi.getCervejas()
      .subscribe(cervejas => {
        this.cervejasLista = cervejas;
        this.cervejasListaFiltrada = this.cervejasLista;
      });
  }

  onFiltraCervejas(filtro) {
    this.cervejasListaFiltrada = this.cervejasLista
      .filter(cerveja => cerveja.name.toLowerCase().includes(filtro.toLowerCase()));
  }

  onSelecionouCerveja(cerveja) {
    this.selecionouCerveja.emit(cerveja);
  }

}









