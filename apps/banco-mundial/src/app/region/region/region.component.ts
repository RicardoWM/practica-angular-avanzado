import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionPaisesService } from '../region-paises.service';

@Component({
  selector: 'prac-banco-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {

  constructor(
    public regionPaisesService: RegionPaisesService
  ) { }

  ngOnInit() {
    console.log(this.regionPaisesService.region);
  }

}
