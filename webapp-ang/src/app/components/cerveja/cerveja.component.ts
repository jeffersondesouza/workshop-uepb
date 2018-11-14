import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.css']
})
export class CervejaComponent implements OnInit {

  @Input() cerveja;
  @Output() selecionouCerveja = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelecionarCerveja() {
    this.selecionouCerveja.emit(this.cerveja);
  }

}
