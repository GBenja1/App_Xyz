import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtrlusuariosPageRoutingModule } from './ctrlusuarios-routing.module';

import { CtrlusuariosPage } from './ctrlusuarios.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtrlusuariosPageRoutingModule,
    SharedModule
  ],
  declarations: [CtrlusuariosPage]
})
export class CtrlusuariosPageModule {}
