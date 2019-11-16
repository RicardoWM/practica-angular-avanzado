import { PaisModule, PaisComponent } from '@practica-angular-avanzado/pais';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import 'zone.js'

@NgModule({
  imports: [BrowserModule, PaisModule],
  entryComponents: [PaisComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(PaisComponent, {
      injector: this.injector
    });
    customElements.define('external-pais', el);
  }
}
