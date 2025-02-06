import { Routes } from '@angular/router';
import { DetalleProyectoComponent } from './components/detalle-proyecto/detalle-proyecto.component';

export const routes: Routes = [
    { path: "proyecto/:id", component: DetalleProyectoComponent }
];
