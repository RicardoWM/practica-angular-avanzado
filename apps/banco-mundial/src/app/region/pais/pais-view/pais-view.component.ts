import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pais } from '../../../store/regiones-data/pais.model';

@Component({
  selector: 'prac-banco-pais-view',
  templateUrl: './pais-view.component.html',
  styleUrls: ['./pais-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisViewComponent implements OnInit {

  @Input() public pais: Pais

  constructor() { }

  ngOnInit() {
    console.log(this.pais);
  }

}
