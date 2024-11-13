import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { User } from '../models/user.models';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  
  getAuth(){
    return getAuth();
  }

  singIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // Obtener todos los usuarios
  getUsers() {
    return this.firestore.collection<User>('users').valueChanges({ idField: 'id' });
  }

  // Actualizar un usuario existente en la colección "users"
  updateUser(id: string, data: Partial<User>) {
    return this.firestore.collection('users').doc(id).update(data);
  }

  // Eliminar un usuario de la colección "users"
  deleteUser(id: string) {
    return this.firestore.collection('users').doc(id).delete();
  }
  singUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
        
  }

  updateUserProfile(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName})
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  logout() {
    return signOut(getAuth());
  }

  isLoggedIn() {
    const auth = getAuth();
    return auth.currentUser !== null;
  }
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

}
