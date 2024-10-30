import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallematePage } from './detallemate.page';

const routes: Routes = [
  {
    path: '',
    component: DetallematePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallematePageRoutingModule {}
