import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Login } from './pages/login/login';
import { Reserva } from './pages/reserva/reserva';
import { Registro } from './pages/registro/registro';


export const routes: Routes = [
{ path: '', component:Inicio},
{ path: 'login', component:Login},
{ path: 'reserva', component:Reserva},
{ path: 'registro', component:Registro}
];
