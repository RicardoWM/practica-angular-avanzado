import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pais } from '../../../store/regiones-data/pais.model';

@Component({
  selector: 'prac-banco-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisesComponent implements OnInit {

  @Input() public paises: Pais[];

  constructor() { }

  ngOnInit() {
  }

}
