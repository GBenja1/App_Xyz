import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  

  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl('', [Validators.required])
  });
  
  firebaseSvc = inject(FirebaseService);

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      const user: User = {
        id: '', // Generar un ID único después del registro
        email: this.form.value.email,
        password: this.form.value.password,
        name: this.form.value.name
      };
      
      this.firebaseSvc.register(user).then(res => {
        console.log('Usuario registrado:', res);
        
      }).catch(err => {
        console.error('Error al registrar el usuario:', err);
        // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
      });
    }
  }
}