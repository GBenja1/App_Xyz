import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallenasaPage } from './detallenasa.page';

const routes: Routes = [
  {
    path: '',
    component: DetallenasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallenasaPageRoutingModule {}
