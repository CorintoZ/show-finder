import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Show, ShowClass } from 'src/app/models/show';
import { TvmazeApiService } from 'src/app/services/tvmaze-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showResults$: Observable<ShowClass[]> = new Observable();
  constructor(private tvMazeService: TvmazeApiService) {}

  ngOnInit(): void {
    this.showResults$ = this.tvMazeService.searchByQuery().pipe(
      map(shows => {
        const showsSlice = shows.slice(0, 6);
        return showsSlice.map(show => show.show);
      })
    );
  }
}
