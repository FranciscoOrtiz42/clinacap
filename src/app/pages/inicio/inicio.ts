import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Importamos la herramienta

@Component({
  selector: 'app-inicio',
  standalone: true, // Esto indica que el componente se gestiona solo
  imports: [RouterLink], // 2. Agregamos RouterLink aquí
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}