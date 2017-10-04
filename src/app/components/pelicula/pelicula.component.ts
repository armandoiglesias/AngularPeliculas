import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service'

import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

    movie :any={}
  constructor(public _ps:PeliculasService
    , private activatedRoute:ActivatedRoute
  ) {
    
   }

  ngOnInit() {

    this.activatedRoute.params
    .map( parametros => parametros['id'])
      .subscribe(id => {
        //this.id = id;
        this._ps.getMovieById(id)
      .subscribe(data => {
        console.log(data);
        this.movie = data;
      });
      } )
    
 
    
  }

}
