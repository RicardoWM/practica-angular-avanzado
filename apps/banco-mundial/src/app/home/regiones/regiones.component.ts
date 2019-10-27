import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Region } from '../regiones.model';

@Component({
  selector: 'prac-banco-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionesComponent implements OnInit {

  @Input() public regiones: Region[];

  constructor() { }

  ngOnInit() {
  }

}
