import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.css']
})
export class CervejaComponent implements OnInit {

  @Input() cerveja;

  constructor() { }

  ngOnInit() {
  }

}
