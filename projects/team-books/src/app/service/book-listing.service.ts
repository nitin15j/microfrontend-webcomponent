import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookListingService {
  constructor(private http: HttpClient) {}

  getBookListing(): Observable<any> {
    return this.http.get('assets/books.json');
    //return this.http.get('https://api.myjson.com/bins/13r402');
  }
}
