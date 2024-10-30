import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallelenguajePage } from './detallelenguaje.page';

const routes: Routes = [
  {
    path: '',
    component: DetallelenguajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallelenguajePageRoutingModule {}
