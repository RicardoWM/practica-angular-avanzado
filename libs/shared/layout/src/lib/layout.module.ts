import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, MainComponent, FooterComponent, LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
