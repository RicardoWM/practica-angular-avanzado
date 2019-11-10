import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rg-lay-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public tittle: string;
  @Input() public image: string;

  constructor() { }

  ngOnInit() {
  }

}
