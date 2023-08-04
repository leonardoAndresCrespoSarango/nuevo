import { Component } from '@angular/core';
import {Usuario} from "../domain/Usuario";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  usuario: Usuario = {};

  constructor(private servicio: UserService) {} // Reemplaza "TuServicio" con el nombre de tu servicio
  crearUsuario() {
    this.servicio.save(this.usuario).subscribe(
      response => {
        // Manejar respuesta exitosa, por ejemplo, mostrar un mensaje
        console.log('Usuario creado exitosamente', response);
      },
      error => {
        // Manejar error, por ejemplo, mostrar un mensaje de error
        console.error('Error al crear usuario', error);
      }
    );
  }
}
