import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from '../models/user.models';
import { createUserWithEmailAndPassword } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  singIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  register(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
        .then((userCredential) => {
            // Aquí podrías guardar el nombre y otros datos en Firestore si lo deseas
            return userCredential.user; // Devuelve el usuario registrado
        });
}
}
