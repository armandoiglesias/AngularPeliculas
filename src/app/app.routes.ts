import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const APP_ROUTES: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'busqueda/:texto', component: BusquedaComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'peliculas' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);