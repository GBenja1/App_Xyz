import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallelenguajePageRoutingModule } from './detallelenguaje-routing.module';

import { DetallelenguajePage } from './detallelenguaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallelenguajePageRoutingModule
  ],
  declarations: [DetallelenguajePage]
})
export class DetallelenguajePageModule {}
