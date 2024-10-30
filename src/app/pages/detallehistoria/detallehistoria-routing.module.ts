import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallehistoriaPage } from './detallehistoria.page';

const routes: Routes = [
  {
    path: '',
    component: DetallehistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallehistoriaPageRoutingModule {}
