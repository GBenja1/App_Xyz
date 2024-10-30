import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallecienciasPage } from './detalleciencias.page';

const routes: Routes = [
  {
    path: '',
    component: DetallecienciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallecienciasPageRoutingModule {}
