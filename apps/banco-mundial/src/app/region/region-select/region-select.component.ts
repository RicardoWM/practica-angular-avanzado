import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Region } from '../../home/region.model';

@Component({
  selector: 'prac-banco-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionSelectComponent implements OnInit {

  @Input() region: Region;

  constructor() { }

  ngOnInit() {
  }

}
