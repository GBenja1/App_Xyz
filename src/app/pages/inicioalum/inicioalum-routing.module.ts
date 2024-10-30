import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioalumPage } from './inicioalum.page';

const routes: Routes = [
  {
    path: '',
    component: InicioalumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioalumPageRoutingModule {}
