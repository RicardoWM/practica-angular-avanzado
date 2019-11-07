import { Component, OnInit, EventEmitter, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Pais } from '../../../store/regiones-data/pais.model';

@Component({
  selector: 'prac-banco-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisesComponent implements OnInit {

  @Input() public paises: Pais[];
  @Output() public choose = new EventEmitter<Pais>();

  constructor() { }

  ngOnInit() {
  }

  choosePais(pais: Pais) {
    this.choose.emit(pais);
  }

}
