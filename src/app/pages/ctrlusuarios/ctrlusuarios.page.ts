import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-ctrlusuarios',
  templateUrl: './ctrlusuarios.page.html',
  styleUrls: ['./ctrlusuarios.page.scss'],
})
export class CtrlusuariosPage implements OnInit {

  users: User[] = []; // Almacena la lista de usuarios
  loading: boolean = true;

  constructor(private firebaseSvc: FirebaseService) {}

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

  // Eliminar un usuario
  deleteUser(id: string) {
    this.firebaseSvc.deleteUser(id).then(() => {
      console.log('Usuario eliminado');
      this.loadUsers(); // Recargar la lista de usuarios después de eliminar
    });
  }
}
