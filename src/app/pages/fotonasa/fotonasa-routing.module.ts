import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotonasaPage } from './fotonasa.page';

const routes: Routes = [
  {
    path: '',
    component: FotonasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotonasaPageRoutingModule {}
