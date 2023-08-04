import { Component } from '@angular/core';
import {Email} from "../domain/Email";
import {EmailServiceService} from "../../services/email-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  email: Email = {}; // Inicializa un objeto Email vacío o con valores predeterminados

  constructor(
              private emailService: EmailServiceService) {

  }

  sendEmail() {
    if (this.email.to && this.email.subject && this.email.text) {
      this.emailService.save(this.email).subscribe(
        response => {
          console.log('Respuesta del servidor', response);

          // Aquí puedes implementar la lógica para manejar la respuesta en forma de matriz
          // Por ejemplo, si esperas recibir un mensaje de confirmación en la matriz
          if (response && response.length > 0 && response[0].message === 'Email enviado') {
            console.log('Email enviado correctamente');
          } else {
            console.error('Error al enviar el email');
          }
        },
        error => {
          console.error('Error al enviar el email', error);
        }
      );
    } else {
      console.warn('Por favor, complete todos los campos del formulario');
    }
  }



}
