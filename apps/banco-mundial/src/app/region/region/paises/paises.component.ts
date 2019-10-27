import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prac-banco-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
