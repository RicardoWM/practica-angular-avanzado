import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais/pais.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PaisComponent],
  exports: [PaisComponent]
})
export class PaisModule {}
