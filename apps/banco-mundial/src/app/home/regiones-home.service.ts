import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Region } from './region.model';

@Injectable()

export class RegionesHomeService {

  private urlApiRegiones
  = 'http://api.worldbank.org/v2/region/?format=json'
  public regiones: Region[];
  public regiones$ = new BehaviorSubject<Region[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getRegiones() {
    this.http.get(this.urlApiRegiones)
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
  }

}
