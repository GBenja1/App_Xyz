import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecienciasPageRoutingModule } from './detalleciencias-routing.module';

import { DetallecienciasPage } from './detalleciencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecienciasPageRoutingModule
  ],
  declarations: [DetallecienciasPage]
})
export class DetallecienciasPageModule {}
