import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicioalum',
    loadChildren: () => import('./pages/inicioalum/inicioalum.module').then( m => m.InicioalumPageModule)
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
    path: 'detalleciencias',
    loadChildren: () => import('./pages/detalleciencias/detalleciencias.module').then( m => m.DetallecienciasPageModule)
  },
  {
    path: 'detallehistoria',
    loadChildren: () => import('./pages/detallehistoria/detallehistoria.module').then( m => m.DetallehistoriaPageModule)
  },
  {
    path: 'detallelenguaje',
    loadChildren: () => import('./pages/detallelenguaje/detallelenguaje.module').then( m => m.DetallelenguajePageModule)
  },
  {
    path: 'detallemate',
    loadChildren: () => import('./pages/detallemate/detallemate.module').then( m => m.DetallematePageModule)
  },  {
    path: 'contra',
    loadChildren: () => import('./pages/contra/contra.module').then( m => m.ContraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
