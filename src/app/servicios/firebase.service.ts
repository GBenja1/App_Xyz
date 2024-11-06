import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { User } from '../models/user.models';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  singIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  singUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
        
  }

  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName})
  }
}
