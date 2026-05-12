import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './reserva.html',
  styleUrls: ['./reserva.css']
})
export class Reserva {
  private router = inject(Router);
  pasoActual: number = 1;

  // Variables para guardar los datos del paciente
  rutPaciente: string = '';
  previsionPaciente: string = '';
  especialidad: string = '';
  ubicacion: string = '';
  fechaSeleccionada: string = '';
  horaSeleccionada: string = '';

  horasDisponibles: string[] = [
  '09:00', '09:30', '10:00', '10:30', 
  '11:30', '12:00', '14:30', '15:00', 
  '16:30', '17:00'
  ];

  medicoSeleccionado: any = null; // Guardará el objeto completo del médico
  medicosDisponibles: any[] = [];

  seleccionarHora(hora: string) {
  this.horaSeleccionada = hora;
  }
  
  buscarMedicos() {
    // simula que la base de datos responde con 3 médicos 
    this.medicosDisponibles = [
        { id: 1, nombre: 'Dr. Juan Pérez', especialidad: this.especialidad, horaExacta: this.horaSeleccionada },
        { id: 2, nombre: 'Dra. María González', especialidad: this.especialidad, horaExacta: this.sumarMinutos(this.horaSeleccionada, 30) },
        { id: 3, nombre: 'Dr. Ignacio Silva', especialidad: this.especialidad, horaExacta: this.sumarMinutos(this.horaSeleccionada, -30) }
    ];
  } 

  sumarMinutos(horaString: string, minutos: number): string {
    if (!horaString) return '';
    let [h, m] = horaString.split(':').map(Number);
    let fecha = new Date();
    fecha.setHours(h, m + minutos);
    // Formatear para que siempre tenga 2 dígitos (ej: 09:30)
    return fecha.getHours().toString().padStart(2, '0') + ':' + 
           fecha.getMinutes().toString().padStart(2, '0');
  }

  seleccionarMedico(medico: any) {
    this.medicoSeleccionado = medico;
  }

  siguientePaso() {
    // 1. INTERCEPCIÓN LÓGICA: Si estamos en el paso 3 y el usuario hizo clic para avanzar, 
    // ejecutamos la búsqueda de médicos ANTES de cambiar de pantalla.
    if (this.pasoActual === 3) {
      this.buscarMedicos();
    }
    
    // 2. EL COMPORTAMIENTO ORIGINAL: Sumar 1 al paso actual para mover la vista
    if (this.pasoActual < 5) {
      this.pasoActual++;
    }
  }

  pasoAnterior() {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
  }

  // Tu función para cerrar con broche de oro
  finalizarReserva() {
    // En un proyecto real, aquí harías un POST a tu base de datos.
    // Por ahora, simulamos el éxito:
    alert('¡Excelente! Tu hora en CLINACAP ha sido reservada con éxito.');
    
    // Opcional: Limpiar las variables si quieres, o simplemente redirigir
    this.router.navigate(['/']);
  }
}