import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wbde-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {
  @Input() public id: string;
  pais: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPais(this.id).subscribe((pais: any) => {
      this.pais = pais;
    });
  }

  getPais(code: string) {
    const urlApiPais = `http://api.worldbank.org/V2/country/${code}?format=json`;

    return this.http.get(urlApiPais).pipe(
      map(data => {
        const pais: any = data[1][0];
        return pais;
      })
    );
  }
}
