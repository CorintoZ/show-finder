import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, filter, Observable, switchMap, tap } from 'rxjs';
import { Show, ShowClass } from '../models/show';

@Injectable({
  providedIn: 'root',
})
export class TvmazeApiService {
  baseUrl: string = 'http://api.tvmaze.com';

  query$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private _http: HttpClient) {}

  searchResults() {
    return this.query$.pipe(switchMap(q => this.getShowResults(q)));
  }

  getShowResults(query: string): Observable<Show[]> {
    return this._http.get(`${this.baseUrl}/search/shows?q=${query}`) as Observable<Show[]>;
  }

  getShow(showId: string) {
    return this._http.get(`${this.baseUrl}/shows/${showId}`) as Observable<ShowClass>;
  }
}
