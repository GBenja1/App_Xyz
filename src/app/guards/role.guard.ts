import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UtilsService } from 'src/app/servicios/utils.service';
import { Router } from '@angular/router';

export const roleGuard: CanActivateFn = async (route, state) => {
  const utilsSvc = inject(UtilsService);
  const router = inject(Router);

  // Obtener el usuario de localStorage y esperar la promesa
  const user = await utilsSvc.getFromLocalStorage('user');
  
  if (user && user.role === 'admin') {
    return true; // Permitir acceso si el rol es admin
  } else {
    router.navigate(['/home']); // Redirigir si no es admin
    return false;
  }
};