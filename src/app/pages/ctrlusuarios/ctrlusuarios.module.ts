import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtrlusuariosPageRoutingModule } from './ctrlusuarios-routing.module';

import { CtrlusuariosPage } from './ctrlusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtrlusuariosPageRoutingModule
  ],
  declarations: [CtrlusuariosPage]
})
export class CtrlusuariosPageModule {}
