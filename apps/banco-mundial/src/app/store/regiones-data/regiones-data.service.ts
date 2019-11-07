import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RegionDataActions from './regiones-data.actions';
import * as RegionDataSelectors from './regiones-data.selectors';
import { Region } from './region.model';
import { Observable } from 'rxjs';
import { Pais } from './pais.model';
import { loadPaises } from './regiones-data.actions';

@Injectable({
  providedIn: 'root'
})
export class RegionesDataFacade {

  constructor(
    private store: Store<Region>
  ) { }

    public changeRegion(region: Region) {
      this.store.dispatch(
        RegionDataActions.changeRegion({
          selectRegion: {...region}
        })
      );
    }

    public changePais(pais: Pais) {
      this.store.dispatch(
        RegionDataActions.changePais({
          selectPais: {...pais}
        })
      );
    }

    public loadPaises(paises: Pais[]) {
      this.store.dispatch(
        RegionDataActions.loadPaises({
          listPaises: [...paises]
        })
      );
    }


    public getRegion$(): Observable<Region> {
      return this.store.select(RegionDataSelectors.getRegion);
    }

    public getPais$(): Observable<Pais> {
      return this.store.select(RegionDataSelectors.getPais);
    }

    public getPaises$(): Observable<Pais[]> {
      return this.store.select(RegionDataSelectors.getPaises);
    }


}
