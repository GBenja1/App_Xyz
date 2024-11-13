import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    this.authSvc.checkAuthStatus(); // Verificar el estado de autenticación al iniciar la aplicación
  }
}
