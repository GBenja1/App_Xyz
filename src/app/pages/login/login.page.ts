import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { UtilsService } from 'src/app/servicios/utils.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  
  ngOnInit() {
  }
  async submit() {
    if(this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.singIn(this.form.value as User).then(res => {
        console.log(res);
        this.utilsSvc.presentToast({
          message: 'Login exitoso!',
          duration: 2500,
          color: 'success',
          position:'middle',
          animated: true,
          icon: 'checkmark-circle-outline'
        })
      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: 'Error... contraseña o correo no existe.',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          animated: true,
          icon: 'alert-circle-outline'
        })

      }).finally(() =>{
        loading.dismiss();
      })
    }
  }
  
}
