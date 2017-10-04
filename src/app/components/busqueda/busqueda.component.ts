import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service'
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  termino:string="";
  movies:any= null;
  constructor(public _ps:PeliculasService,
    public route:ActivatedRoute
  ) { 
    this.route.params.subscribe(
      params => {
        console.log(params);
        if (params['texto']){
          this.termino = params['texto'];
          this.buscarMovie()
        }
      }
    )
  }

  ngOnInit() {
  }

  buscarMovie(){
    if(this.termino.length <3){
      this.movies= null;
      return;
    }

    this._ps.getMovies(this.termino)
      .subscribe(data => {
        this.movies = data;
        console.log(data);
      })

  }

}
