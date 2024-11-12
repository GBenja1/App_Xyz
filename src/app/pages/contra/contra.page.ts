import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { UtilsService } from 'src/app/servicios/utils.service';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  
  async submit() {
    if(this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res => {

        this.utilsSvc.presentToast({
          message: 'Correo enviado con exito',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          animated: true,
          icon: 'mail-outline'
        });

        this.utilsSvc.routerLink('/login');
        this.form.reset();

      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: 'Error... contraseña o correo invalido.',
          duration: 2500,
          color: 'danger',
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
