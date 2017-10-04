import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service'


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  movies:any = {};
  constructor(public _ps:PeliculasService){
    this._ps.getPopulares()
      .subscribe(data => {
        console.log(data);
        this.movies = data;
        
      });
  }

  ngOnInit() {
  }

}
