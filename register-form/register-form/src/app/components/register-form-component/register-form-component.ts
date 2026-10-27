import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // FormsModule es necesario para poder usar [(ngModel)] en el HTML
  imports: [FormsModule],
  selector: 'app-register-form-component',
  styleUrl: './register-form-component.css',
  templateUrl: './register-form-component.html',
})
export class RegisterFormComponent {
  // Variables vinculadas con [(ngModel)] a cada elemento del formulario
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';
  sexo = '';
  comoConocio = '';
  password = '';
  confirmPassword = '';
  aceptaTerminos = false;

  registrar() {
    console.log('Nombre: ' + this.nombre);
    console.log('Apellidos: ' + this.apellidos);
    console.log('NIF: ' + this.nif);
    console.log('Email: ' + this.email);
    console.log('Teléfono: ' + this.telefono);
    console.log('Sexo: ' + this.sexo);
    console.log('Cómo conoció la página: ' + this.comoConocio);
    console.log('Contraseña: ' + this.password);
    console.log('Confirmar contraseña: ' + this.confirmPassword);
    console.log('Acepta términos y condiciones: ' + this.aceptaTerminos);
  }
}
