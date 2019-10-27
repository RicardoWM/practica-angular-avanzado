import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Region } from '../../store/regiones-data/region.model';

@Component({
  selector: 'prac-banco-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionSelectComponent implements OnInit {

  @Input() public region: Region;

  constructor() { }

  ngOnInit() {
  }

}
