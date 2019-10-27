import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { PaisComponent } from './pais/pais.component';


const routes: Routes = [
  {
    path: '',
    component: RegionComponent
  },
  {
    path: 'pais',
    component: PaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
