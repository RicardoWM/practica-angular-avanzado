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
import { StoreModule } from '@ngrx/store';
import * as fromRegionesData from './store/regiones-data/regiones-data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegionesDataEffects } from './store/regiones-data/regiones-data.effects';



@NgModule({
  declarations: [RegionComponent, PaisesComponent, RegionSelectComponent, PaisComponent, PaisViewComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromRegionesData.regionesDataFeatureKey, fromRegionesData.reducer),
    EffectsModule.forFeature([RegionesDataEffects])
  ],
  providers: [
    RegionPaisesService
  ]
})
export class RegionModule { }
