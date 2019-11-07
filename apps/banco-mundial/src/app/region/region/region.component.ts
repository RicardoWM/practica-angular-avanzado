import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { RegionPaisesService } from '../region-paises.service';
import { Observable } from 'rxjs';
import { Region } from '../../store/regiones-data/region.model';
import { RegionesDataFacade } from '../../store/regiones-data/regiones-data.service';
import { Pais } from '../../store/regiones-data/pais.model';
import { Router } from '@angular/router';

@Component({
  selector: 'prac-banco-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {
  public region$: Observable<Region>;
  public paises$: Observable<Pais[]>;

  constructor(
    public regionPaisesService: RegionPaisesService,
    private regionDataFacade: RegionesDataFacade,
    private router: Router
  ) {}

  ngOnInit() {
    this.region$ = this.regionDataFacade.getRegion$();
    this.paises$ = this.regionDataFacade.getPaises$();
  }

  selectPais(pais: Pais) {
    this.regionPaisesService.getPais(pais.id);
    this.router.navigate(['/region/pais']);
  }
}
