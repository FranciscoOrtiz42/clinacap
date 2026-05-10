import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  // Variables para capturar lo que el usuario escribe
  userEmail: string = '';
  userPass: string = '';
  
  // Variable para mostrar el mensaje de error en el HTML
  errorMessage: string = '';

  private router = inject(Router);

  iniciarSesion() {
    // 1. Ir a buscar el usuario guardado en el "registro"
    const dataGuardada = sessionStorage.getItem('usuarioLogueado');

    if (dataGuardada) {
      const usuario = JSON.parse(dataGuardada);

      // 2. Comparar (Lógica de verdad)
      if (this.userEmail === usuario.correo && this.userPass === usuario.pass) {
        console.log('Login exitoso');
        this.errorMessage = '';
        this.router.navigate(['/inicio']); // Cámbialo a tu ruta de inicio
      } else {
        // 3. Si se equivoca, vaciamos y tiramos error
        this.manejarError('Usuario o contraseña incorrectos');
      }
    } else {
      this.manejarError('No hay usuarios registrados en esta sesión');
    }
  }


  manejarError(mensaje: string) {
    this.errorMessage = mensaje;
    // Vaciamos los campos como pediste
    this.userEmail = '';
    this.userPass = '';
    
    // El error desaparece después de 3 segundos para no ensuciar la visual
    setTimeout(() => this.errorMessage = '', 3000);
  }
}