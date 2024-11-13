// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);
  authStatus$ = this.authStatus.asObservable();

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) {}
  // Llama a este método al iniciar sesión
  async checkAuthStatus() {
    const user = await this.utilsSvc.getFromLocalStorage('user');
    const isLoggedIn = await this.firebaseSvc.isLoggedIn();

    if (user && isLoggedIn) {
      this.authStatus.next(true);
    } else {
      this.logout(); // Cierra la sesión y limpia el almacenamiento si no está autenticado
    }
  }

  login() {
    this.authStatus.next(true);
  }

  logout() {
    this.authStatus.next(false);
    this.utilsSvc.removeFromLocalStorage('user');
  }
}