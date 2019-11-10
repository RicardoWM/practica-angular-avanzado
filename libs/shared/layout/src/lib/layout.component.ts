import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rg-lay-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  @Input() public tittle: string;
  @Input() public textFooter: string;
  @Input() public image: string;

  constructor() { }

  ngOnInit() {
  }

}
