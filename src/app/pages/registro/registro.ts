import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,NgIf,NgClass],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
})
export class Registro {
  nombre: string = '';
  correo: string = '';
  password: string = '';

  // 2. Inyecta el servicio en el constructor
  constructor(private router: Router) { }

  guardarTemporalmente() {
    const usuarioData = {
      nombre: this.nombre,
      correo: this.correo,
      pass: this.password
    };

    // Guardamos los datos
    sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioData));
    
    console.log('Datos guardados con éxito');

    // 3. Redirige al usuario al login
    this.router.navigate(['/login']); 
  }
}
//esta esta aun sin terminar se requiere agregar funcionalidad en registro.html