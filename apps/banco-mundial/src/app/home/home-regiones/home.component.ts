import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionesHomeService } from '../regiones-home.service';
import { RegionPaisesService } from '../../region/region-paises.service';
import { Router } from '@angular/router';
import { RegionesDataFacade } from '../../store/regiones-data/regiones-data.service';
import { Region } from '../../store/regiones-data/region.model';

@Component({
  selector: 'prac-banco-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(
    public regionesService: RegionesHomeService,
    private regionPaisesService: RegionPaisesService,
    private regionDataFacade: RegionesDataFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.regionesService.getRegiones();
  }

  selectRegion(region: Region) {
    this.regionDataFacade.changeRegion(region);
    this.regionPaisesService.getPaises(region.code);
    this.router.navigate(['/region']);
  }

}
