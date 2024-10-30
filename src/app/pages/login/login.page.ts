import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseService } from 'src/app/servicios/firebase.service';


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
  
  
  ngOnInit() {
  }
  submit() {
    if(this.form.valid) {
      this.firebaseSvc.singIn(this.form.value as User).then(res => {
        console.log(res);
        
      })

      
    }
  }
  
}
