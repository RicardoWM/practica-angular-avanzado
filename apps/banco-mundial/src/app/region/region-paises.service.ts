import { Injectable } from '@angular/core';
import { Region } from '../home/region.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pais } from './pais.model';
import { map } from 'rxjs/operators';


@Injectable()

export class RegionPaisesService {

  public region: Region;
  public region$ = new BehaviorSubject<Region>(null);
  public paises: Pais[];
  public paises$ = new BehaviorSubject<Pais[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  setRegion(region: Region) {
    this.region = {...region};
    this.region$.next({...this.region});
    console.log(this.region$);
    console.log(this.region);
  }

  public selectRegion$ = () => this.region$.asObservable();


  /* getPaises() {
    let urlApiPaises
  = `http://api.worldbank.org/v2/region/${this.region.id}/country?per_page=1000&format=json`;

    this.http.get(this.urlApiPaises)
    .pipe(
      map(data => {
        const rb: any[] = data[1];
        const r = rb.filter(region => region.id !== '');
        return r;
      })
    )
    .subscribe(
      regiones => {
        if (regiones) {
          this.regiones = regiones;
          this.regiones$.next(this.regiones);
        }
        console.log(this.regiones);

      }
    )
  } */
}
