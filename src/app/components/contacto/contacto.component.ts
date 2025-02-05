import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import EmailJS from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  nombre: string = "";
  correo: string = "";
  mensaje: string = "";
  mensajeEnviado: string = "";

  validarFormulario(): boolean {
    return this.nombre.length >= 3 && this.correo.includes("@") && this.mensaje.trim().length > 0;
  }

  enviarFormulario() {
    if (!this.validarFormulario()) {
      this.mensajeEnviado = "Por favor, complete todos los campos correctamente.";
      return;
    }

    const templateParams = {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    };

    EmailJS.send("service_5r6h9lq", "template_jstu0df", templateParams, "4HYSAai-AsnyyUxoZ")
      .then((response) => {
        this.mensajeEnviado = "¡Mensaje enviado con éxito!";
        this.nombre = "";
        this.correo = "";
        this.mensaje = "";
      })
      .catch((error) => {
        this.mensajeEnviado = "Ocurrió un error al enviar el mensaje. Intente nuevamente.";
      });
  }

};