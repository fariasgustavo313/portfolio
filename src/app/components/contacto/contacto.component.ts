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
  cargando: boolean = false; // Estado para el spinner o bloqueo de botón

  validarFormulario(): boolean {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return (
      this.nombre.length >= 3 && 
      emailPattern.test(this.correo) && 
      this.mensaje.trim().length > 0
    );
  }

  enviarFormulario() {
    if (!this.validarFormulario()) {
      this.mensajeEnviado = ">> ERROR: INVALID_PAYLOAD. Check fields.";
      return;
    }

    this.cargando = true;
    this.mensajeEnviado = ">> STATUS: SENDING_DATA...";

    const templateParams = {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    };

    // Usando tus credenciales actuales
    EmailJS.send("service_5r6h9lq", "template_0zhf1rv", templateParams, "4HYSAai-AsnyyUxoZ")
      .then((response) => {
        this.mensajeEnviado = ">> SUCCESS: CONNECTION_ESTABLISHED. Message sent.";
        this.nombre = "";
        this.correo = "";
        this.mensaje = "";
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        this.mensajeEnviado = ">> ERROR: UPLINK_FAILED. Try again later.";
      })
      .finally(() => {
        this.cargando = false;
      });
  }
};