import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionesHomeService } from '../regiones-home.service';
import { RegionPaisesService } from '../../region/region-paises.service';
import { Region } from '../../region/store/regiones-data/region.model';
import { Router } from '@angular/router';
import { RegionesDataFacade } from '../../region/store/regiones-data/regiones-data.service';

@Component({
  selector: 'prac-banco-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(
    public regionesService: RegionesHomeService,
    private regionDataFacade: RegionesDataFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.regionesService.getRegiones();
  }

  selectRegion(region: Region) {
    this.regionDataFacade.changeRegion(region);
    this.router.navigate(['/region']);
  }

}
