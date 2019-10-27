import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';
import { RegionRoutingModule } from './region-routing.module';
import { RegionPaisesService } from './region-paises.service';
import { PaisesComponent } from './paises/paises.component';
import { RegionSelectComponent } from './region-select/region-select.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RegionComponent, PaisesComponent, RegionSelectComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegionPaisesService
  ]
})
export class RegionModule { }
