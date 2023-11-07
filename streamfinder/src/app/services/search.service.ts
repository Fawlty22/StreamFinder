import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseMovieUrl = 'https://api.themoviedb.org/3/search/movie?query='
  baseShowUrl = 'https://api.themoviedb.org/3/search/tv?query='
  movieFullDetailsUrl = 'https://api.themoviedb.org/3/movie';
  appendProvidersQuery = 'append_to_response=watch%2Fproviders&language=en-US'
  apiKey = environment.apiKey
  // providersUrl= `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`

  constructor(private http: HttpClient) {}

  search(name: string, type: string): Observable<any> {
    if (type === 'movie') {
      return this.http.get(`${this.baseMovieUrl}${name}&api_key=${this.apiKey}`)
    } else {
      return this.http.get(`${this.baseShowUrl}${name}&api_key=${this.apiKey}`)
    }
  }

  findOneMovie(id: number, providersBool: boolean = true): Observable<any> {
    return providersBool ?
     this.http.get(`${this.movieFullDetailsUrl}/${id}?${this.appendProvidersQuery}&api_key=${this.apiKey}`) :
     this.http.get(`${this.movieFullDetailsUrl}/${id}&api_key=${this.apiKey}`);
  }

  findProvider(movieId: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?query=&api_key=${this.apiKey}` )
  }
}
