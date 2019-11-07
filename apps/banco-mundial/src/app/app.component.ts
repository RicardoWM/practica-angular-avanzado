import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'prac-banco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banco-mundial';

  constructor(private swUpdate: SwUpdate) {
    this.checkVersionUpdates();
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
