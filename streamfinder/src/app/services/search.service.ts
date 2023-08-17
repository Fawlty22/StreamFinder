import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'http://localhost'
  apiKey = 'e631932464e3bc7a20a6ce69a82834f8'
  constructor(private http: HttpClient) {}

  findOne(name: string): Observable<any> {
    return this.http.get(this.baseUrl)
  }
}
