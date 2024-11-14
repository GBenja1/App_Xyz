import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { User } from 'src/app/models/user.models';
import { AlertController, ToastController } from '@ionic/angular'; // Importa AlertController y ToastController

@Component({
  selector: 'app-ctrlusuarios',
  templateUrl: './ctrlusuarios.page.html',
  styleUrls: ['./ctrlusuarios.page.scss'],
})
export class CtrlusuariosPage implements OnInit {

  users: User[] = []; // Almacena la lista de usuarios
  loading: boolean = true;

  constructor(
    private firebaseSvc: FirebaseService,
    private alertCtrl: AlertController,  // Inyecta AlertController
    private toastCtrl: ToastController   // Inyecta ToastController para mensajes
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  // Cargar usuarios desde Firebase
  loadUsers() {
    this.firebaseSvc.getUsers().subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }
  // Confirmación para eliminar un usuario
  async confirmDeleteUser(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteUser(id);
          }
        }
      ]
    });
    await alert.present();
  }
  async deleteUser(id: string) {
    try {
      await this.firebaseSvc.deleteUser(id);
      this.presentToast('Usuario eliminado con éxito', 'success');
      this.loadUsers(); // Recargar la lista de usuarios después de eliminar
    } catch (error) {
      console.error(error);
      this.presentToast('Error al eliminar el usuario', 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    await toast.present();
  }
}
