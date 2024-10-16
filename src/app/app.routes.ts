import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' }, // Ruta para 'home'
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirecciona la ruta vacía ('') a 'home'
    { path: '**', redirectTo: 'home' } // Cualquier otra ruta redirige a 'home'
];
