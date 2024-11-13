import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { UtilsService } from 'src/app/servicios/utils.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  authSvc = inject(AuthService);  // Inyecta AuthService
  
  ngOnInit() {}

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.singIn(this.form.value as User).then(res => {
        this.getUserInfo(res.user.uid);
      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: 'Error... contraseña o correo inválido.',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          animated: true,
          icon: 'alert-circle-outline'
        });

      }).finally(() => {
        loading.dismiss();
      });
    }
  }

  async getUserInfo(id: string) {
    const loading = await this.utilsSvc.loading();
    await loading.present();

    let path = `users/${id}`;
    this.firebaseSvc.getDocument(path).then((user: User) => {
      // Guardar la información del usuario en localStorage
      this.utilsSvc.saveInLocalStorage('user', user);

      // Notificar inicio de sesión al AuthService
      this.authSvc.login();

      // Redirigir al home y mostrar mensaje de bienvenida
      this.utilsSvc.routerLink('/home');
      this.form.reset();
      this.utilsSvc.presentToast({
        message: `Bienvenido... ${user.name}`,
        duration: 2000,
        color: 'primary',
        position: 'middle',
        animated: true,
        icon: 'person-circle-outline'
      });

    }).catch(error => {
      console.log(error);
      this.utilsSvc.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: 'middle',
        animated: true,
        icon: 'alert-circle-outline'
      });

    }).finally(() => {
      loading.dismiss();
    });
  }
}
