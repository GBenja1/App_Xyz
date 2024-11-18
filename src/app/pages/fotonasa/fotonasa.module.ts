import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotonasaPageRoutingModule } from './fotonasa-routing.module';

import { FotonasaPage } from './fotonasa.page';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core'; // Importar el módulo de traducción


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotonasaPageRoutingModule,
    RouterLink,
    SharedModule,
    TranslateModule // Asegúrate de importar esto
  ],
  declarations: [FotonasaPage]
})
export class FotonasaPageModule {}
