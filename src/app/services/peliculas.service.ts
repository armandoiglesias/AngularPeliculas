import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apiKey:string = "995a23ed00869940870fc31bd93e9d26";
  private urlMovieDB:string = "https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp, 
    private http:Http
  ) { }

  getPopulares(){
    let url = `${ this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
    .map(res => res.json());
  }

  getMovieById(id:string){
//https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
    let url = `${ this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getMovies(termino:string){
//https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
    let url = `${ this.urlMovieDB}/search/movie?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK&query=${termino}`;
    return this.jsonp.get(url)
      .map(res => res.json());
  }

}
