import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-regiones/home.component';
import { RegionesHomeService } from './regiones-home.service';
import { HttpClientModule } from '@angular/common/http';
import { RegionesComponent } from './regiones/regiones.component';

@NgModule({
  declarations: [HomeComponent, RegionesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegionesHomeService
  ]
})
export class HomeModule { }
