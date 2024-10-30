import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioalumPageRoutingModule } from './inicioalum-routing.module';

import { InicioalumPage } from './inicioalum.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioalumPageRoutingModule,
    SharedModule
  ],
  declarations: [InicioalumPage]
})
export class InicioalumPageModule {}
