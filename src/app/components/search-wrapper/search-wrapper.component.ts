import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ShowClass } from 'src/app/models/show';
import { TvmazeApiService } from 'src/app/services/tvmaze-api.service';

@Component({
  selector: 'app-search-wrapper',
  templateUrl: './search-wrapper.component.html',
  styleUrls: ['./search-wrapper.component.scss'],
})
export class SearchWrapperComponent {
  public showResults$: Observable<ShowClass[]> = new Observable();
  constructor(private tvMazeService: TvmazeApiService) {}

  handleQuery(query: string) {
    this.showResults$ = this.tvMazeService.getShowResults(query).pipe(
      map(shows => {
        const showsSlice = shows.slice(0, 6);
        return showsSlice.map(show => show.show);
      })
    );
  }
}
