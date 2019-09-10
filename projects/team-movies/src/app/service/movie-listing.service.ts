import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListingService {
  constructor(private http: HttpClient) {}

  getMovieListing(): Observable<any> {
    return this.http.get('assets/movies.json');
    //return this.http.get('https://api.myjson.com/bins/13r402');
  }
}
