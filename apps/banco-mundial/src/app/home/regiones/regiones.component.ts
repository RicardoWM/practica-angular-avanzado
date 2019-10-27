import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Region } from '../../region/store/regiones-data/region.model';

@Component({
  selector: 'prac-banco-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionesComponent implements OnInit {

  @Input() public regiones: Region[];
  @Output() public choose = new EventEmitter<Region>();

  constructor() { }

  ngOnInit() {
  }

  chooseRegion(region: Region) {
    this.choose.emit(region);
  }



}
