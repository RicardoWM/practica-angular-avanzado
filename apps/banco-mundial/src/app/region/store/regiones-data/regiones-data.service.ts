import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RegionDataActions from './regiones-data.actions';
import * as RegionDataSelectors from './regiones-data.selectors';
import { Region } from './region.model';
import { Observable } from 'rxjs';

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

    public getRegion$(): Observable<Region> {
      return this.store.select(RegionDataSelectors.getRegion);
    }


}
