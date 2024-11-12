import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { UtilsService } from 'src/app/servicios/utils.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('usuario')  // "usuario" como rol predeterminado
  });

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {}

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      try {
        // Registro en Firebase Auth
        const res = await this.firebaseSvc.singUp(this.form.value as User);
        const userId = res.user.uid;
        
        // Actualización de perfil con nombre
        await this.firebaseSvc.updateUser (this.form.value.name);
        
        // Guardar en Firestore, incluyendo el rol
        const userData = { ...this.form.value, id: userId }; // Incluye el rol automáticamente
        delete userData.password; // No guardes la contraseña
        await this.firebaseSvc.setDocument(`users/${userId}`, userData); // Guarda todos los datos, incluyendo el rol

        // Guardar en almacenamiento local y redirigir
        this.utilsSvc.saveInLocalStorage('user', userData);
        this.utilsSvc.routerLink('/home');
        
        // Mensaje de éxito
        this.utilsSvc.presentToast({
          message: '¡Registro exitoso!',
          duration: 2500,
          color: 'success',
          position: 'middle',
          animated: true,
          icon: 'checkmark-circle-outline'
        });

      } catch (error) {
        // Manejo de errores
        this.handleError(error);
      } finally {
        loading.dismiss();
      }
    }
  }

  handleError(error: any) {
    let message = 'Ocurrió un error. Inténtalo de nuevo.';
    if (error.code === 'auth/email-already-in-use') {
      message = 'Este correo ya está en uso.';
    } else if (error.code === 'auth/weak-password') {
      message = 'La contraseña debe tener al menos 6 caracteres.';
    }
    
    this.utilsSvc.presentToast({
      message,
      duration: 2500,
      color: 'primary',
      position: 'middle',
      animated: true,
      icon: 'alert-circle-outline'
    });
  }
}
