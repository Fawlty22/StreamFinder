import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'https://api.themoviedb.org/3/search/movie?query='
  fullDetailsUrl = 'https://api.themoviedb.org/3/movie/22?append_to_response=watch%2Fproviders&language=en-US';
  apiKey = environment.apiKey
  // providersUrl= `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`

  constructor(private http: HttpClient) {}

  findOne(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${name}&api_key=${this.apiKey}` )
  }
  findProvider(movieId: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?query=&api_key=${this.apiKey}` )
  }
}
