import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../store/regiones-data/pais.model';
import { map } from 'rxjs/operators';
import { Region } from '../store/regiones-data/region.model';
import { RegionesDataFacade } from '../store/regiones-data/regiones-data.service';


@Injectable({
  providedIn: 'root'
})

export class RegionPaisesService {

  public region: Region;
  public region$ = new BehaviorSubject<Region>(null);
  public paises: Pais[];
  public paises$ = new BehaviorSubject<Pais[]>([]);

  constructor(
    private http: HttpClient,
    private storeRegionesFacade: RegionesDataFacade
  ) { }

  setRegion(region: Region) {
    this.region = {...region};
    this.region$.next({...this.region});
  }

  public selectRegion$ = () => this.region$.asObservable();


  getPaises(code: string) {
    const urlApiPaises
  = `http://api.worldbank.org/v2/region/${code}/country?per_page=1000&format=json`;

    this.http.get(urlApiPaises)
    .pipe(
      map(data => {
        const paises: Pais[] = data[1];
        return paises;
      })
    )
    .subscribe( (paises: Pais[]) => {
      console.log(paises);
      this.storeRegionesFacade.loadPaises(paises);
    }
    );
  }

  getPais(code: string) {
    const urlApiPais
  = `http://api.worldbank.org/V2/country/${code}?format=json`;

    this.http.get(urlApiPais)
    .pipe(
      map(data => {
        const pais: Pais = data[1][0];
        return pais;
      })
    )
    .subscribe( (pais: Pais) => {
      console.log(pais);
      this.storeRegionesFacade.changePais(pais);
    }
    );
  }
}
