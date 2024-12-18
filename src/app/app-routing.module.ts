import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard'; // Importa el guard



const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contra',
    loadChildren: () => import('./pages/contra/contra.module').then( m => m.ContraPageModule)
  },
  {
    path: 'ctrlusuarios',
    loadChildren: () => import('./pages/ctrlusuarios/ctrlusuarios.module').then( m => m.CtrlusuariosPageModule),
    canActivate: [roleGuard]
  },
  {
    path: 'fotonasa',
    loadChildren: () => import('./pages/fotonasa/fotonasa.module').then( m => m.FotonasaPageModule)
  },
  {
    path: 'detallenasa/:date',
    loadChildren: () => import('./pages/detallenasa/detallenasa.module').then( m => m.DetallenasaPageModule)
  },  {
    path: 'planet-detail',
    loadChildren: () => import('./pages/planet-detail/planet-detail.module').then( m => m.PlanetDetailPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
