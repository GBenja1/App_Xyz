import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallenasaPageRoutingModule } from './detallenasa-routing.module';

import { DetallenasaPage } from './detallenasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallenasaPageRoutingModule
  ],
  declarations: [DetallenasaPage]
})
export class DetallenasaPageModule {}
