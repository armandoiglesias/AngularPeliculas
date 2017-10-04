import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(pelicula: any): any {
    let src = "https://image.tmdb.org/t/p/w300";
    
     if(pelicula.poster_path){
      return src + pelicula.poster_path;
    }else if(pelicula.backdrop_path){
      return src + pelicula.backdrop_path
    }else{
      return "assets/img/noImage.jpg"
    }
  }

}
