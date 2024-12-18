import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/servicios/utils.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  isUser: boolean = false;

  @Input() title!: string;

  constructor(
    private firebaseSvc: FirebaseService,
    private router: Router,
    private utilsSvc: UtilsService,
    private authSvc: AuthService
  ) {}

  async ngOnInit() {
    // Escucha cambios en el estado de autenticación
    this.authSvc.authStatus$.subscribe(async (status) => {
      this.isLoggedIn = status;
      if (status) {
        await this.checkUserStatus();
      } else {
        this.isAdmin = false;
      }
    });

    // Verifica el estado inicial del usuario
    await this.checkUserStatus();
  }

  async checkUserStatus() {
    const user = await this.utilsSvc.getFromLocalStorage('user');
    if (user) {
      this.isLoggedIn = true;
      this.isAdmin = user.role === 'admin';
    } else {
      this.isLoggedIn = false;
      this.isAdmin = false;
    }
  }

  async logout() {
    await this.firebaseSvc.logout();
    this.utilsSvc.removeFromLocalStorage('user');
    this.authSvc.logout(); // Notifica el cierre de sesión
    this.router.navigate(['/login']);
  }
}
