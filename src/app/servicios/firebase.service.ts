import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.models';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFireAuth);

  singIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  singUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
        
  }

  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName})
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(),path),data);
  }

  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data(); 
  }
}
