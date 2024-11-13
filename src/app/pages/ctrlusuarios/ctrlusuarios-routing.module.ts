import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtrlusuariosPage } from './ctrlusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: CtrlusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtrlusuariosPageRoutingModule {}
