import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rg-lay-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public textFooter: string;

  constructor() { }

  ngOnInit() {
  }

}
