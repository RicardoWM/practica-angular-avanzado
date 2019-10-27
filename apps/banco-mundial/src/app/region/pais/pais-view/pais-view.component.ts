import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prac-banco-pais-view',
  templateUrl: './pais-view.component.html',
  styleUrls: ['./pais-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
