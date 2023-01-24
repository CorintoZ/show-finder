import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show, ShowClass } from '../models/show';

@Injectable({
  providedIn: 'root',
})
export class TvmazeApiService {
  baseUrl: string = 'http://api.tvmaze.com';

  constructor(private _http: HttpClient) {}

  getShowResults(query: string): Observable<Show[]> {
    return this._http.get(`${this.baseUrl}/search/shows?q=${query}`) as Observable<Show[]>;
  }

  getShow(showId: string) {
    return this._http.get(`${this.baseUrl}/shows/${showId}`) as Observable<ShowClass>;
  }
}
