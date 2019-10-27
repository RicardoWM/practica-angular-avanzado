import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionPaisesService } from '../region-paises.service';
import { RegionesDataFacade } from '../store/regiones-data/regiones-data.service';
import { Observable } from 'rxjs';
import { Region } from '../store/regiones-data/region.model';

@Component({
  selector: 'prac-banco-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {

  public region$: Observable<Region>;

  constructor(
    public regionPaisesService: RegionPaisesService,
    public regionDataFacade: RegionesDataFacade
  ) { }

  ngOnInit() {
    this.region$ = this.regionDataFacade.getRegion$();
  }

}
