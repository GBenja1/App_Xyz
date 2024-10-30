import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallehistoriaPageRoutingModule } from './detallehistoria-routing.module';

import { DetallehistoriaPage } from './detallehistoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallehistoriaPageRoutingModule
  ],
  declarations: [DetallehistoriaPage]
})
export class DetallehistoriaPageModule {}
