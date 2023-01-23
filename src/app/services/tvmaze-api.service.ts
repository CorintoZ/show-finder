import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root',
})
export class TvmazeApiService {
  baseUrl: string = 'http://api.tvmaze.com/search/shows';

  query$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private _http: HttpClient) {}

  searchByQuery() {
    return this.query$.pipe(switchMap(q => this.getShowResults(q)));
  }

  getShowResults(query: string): Observable<Show[]> {
    return this._http.get(`${this.baseUrl}?q=${query}`) as Observable<Show[]>;
  }
}