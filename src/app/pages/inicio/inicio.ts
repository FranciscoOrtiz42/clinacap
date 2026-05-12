import { Component, inject, OnInit , ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {
  // Variables para controlar el Toast
  nombreUsuario: string = '';
  mostrarBienvenida: boolean = false;

  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    // 1. Interceptamos la navegación actual para revisar si trae "equipaje" (el state)
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as { nombreUsuario: string };

    // Si viene de loguearse y trae el nombre, activamos la alerta
    if (state && state.nombreUsuario) {
      this.nombreUsuario = state.nombreUsuario;
      this.mostrarBienvenida = true;
    }
  }

  ngOnInit() {
    // 2. Si la alerta está activada, iniciamos un temporizador (setTimeout)
    if (this.mostrarBienvenida) {
      setTimeout(() => {
        console.log('Temporizador de 4 segundos finalizado. Ocultando toast...');
        // Después de 4000 milisegundos (4 segundos), apagamos la alerta
        this.mostrarBienvenida = false;
        this.cdr.detectChanges();
      }, 4000);
    }
  }
}