import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';
import { RegionRoutingModule } from './region-routing.module';
import { RegionPaisesService } from './region-paises.service';
import { PaisesComponent } from './region/paises/paises.component';
import { RegionSelectComponent } from './region/region-select/region-select.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisComponent } from './pais/pais.component';
import { PaisViewComponent } from './pais/pais-view/pais-view.component';



@NgModule({
  declarations: [RegionComponent, PaisesComponent, RegionSelectComponent, PaisComponent, PaisViewComponent],
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
