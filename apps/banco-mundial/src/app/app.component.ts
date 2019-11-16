import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'prac-banco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private swUpdate: SwUpdate,
    private title: Title,
    private meta: Meta
  ) {
    this.checkVersionUpdates();
  }

  ngOnInit() {
    this.title.setTitle('Regiones del Mundo');
    this.meta.addTag({ property: 'og:title', content: 'Regiones del Mundo' }, true);
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `Nueva versión disponible: ${appData.version}.`;
          msg += `${appData.changelog}.`;
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}
