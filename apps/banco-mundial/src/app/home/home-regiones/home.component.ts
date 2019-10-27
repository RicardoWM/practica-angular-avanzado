import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionesHomeService } from '../regiones-home.service';

@Component({
  selector: 'prac-banco-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(
    public regionesService: RegionesHomeService
  ) { }

  ngOnInit() {
    this.regionesService.getRegiones();
  }

}
