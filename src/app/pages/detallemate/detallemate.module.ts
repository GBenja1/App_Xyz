import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallematePageRoutingModule } from './detallemate-routing.module';

import { DetallematePage } from './detallemate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallematePageRoutingModule
  ],
  declarations: [DetallematePage]
})
export class DetallematePageModule {}
