import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Pais } from '../../store/regiones-data/pais.model';
import { Observable } from 'rxjs';
import { RegionesDataFacade } from '../../store/regiones-data/regiones-data.service';

@Component({
  selector: 'prac-banco-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {
  public pais$: Observable<Pais>;

  constructor(
    private regionDataFacade: RegionesDataFacade,
  ) { }

  ngOnInit() {
    this.pais$ = this.regionDataFacade.getPais$();
  }

}
