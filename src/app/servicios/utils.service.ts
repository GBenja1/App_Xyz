import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  lodingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);

  loading(){
    return this.lodingCtrl.create({spinner: 'crescent'});
  }

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }

  saveInLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  async getFromLocalStorage(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
