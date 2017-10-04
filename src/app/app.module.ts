import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpModule, JsonpModule} from '@angular/http'


import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';

// services
import { PeliculasService} from './services/peliculas.service';

// components
import { DemoComponent } from './components/demo/demo.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { PeliculasComponent } from './components/peliculas/peliculas.component'
import { PeliculaComponent } from './components/pelicula/pelicula.component'
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NoimagePipe } from './pipes/noimage.pipe'


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent, PeliculasComponent
    , PeliculaComponent, BusquedaComponent, NoimagePipe
  ],
  imports: [
    BrowserModule, FormsModule
    , JsonpModule
    , HttpModule, APP_ROUTING

  ],
  providers: [
    PeliculasService
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
