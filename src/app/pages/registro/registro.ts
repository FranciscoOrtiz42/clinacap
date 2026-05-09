import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
})
export class Registro {// Variables para vincular con el HTML
  nombre: string = '';
  fechaNac: string = '';
  password: string = '';

  guardarTemporalmente() {
    // Creamos un objeto con los datos
    const usuarioData = {
      nombre: this.nombre,
      fecha: this.fechaNac,
      pass: this.password
    };

    // Lo guardamos en el sessionStorage (convertido a texto)
    sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioData));

    console.log('Datos guardados en sesión:', usuarioData);
    alert('¡Datos guardados temporalmente con éxito!');
  }
}
//esta esta aun sin terminar se requiere agregar funcionalidad en registro.html