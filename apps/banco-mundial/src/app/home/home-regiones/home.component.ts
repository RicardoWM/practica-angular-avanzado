import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionesHomeService } from '../regiones-home.service';
import { RegionPaisesService } from '../../region/region-paises.service';
import { Region } from '../region.model';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.regionesService.getRegiones();
  }

  selectRegion(region: Region) {
    this.regionPaisesService.setRegion(region);
    this.router.navigate(['/region']);
  }

}
