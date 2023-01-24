import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ShowClass } from 'src/app/models/show';
import { TvmazeApiService } from 'src/app/services/tvmaze-api.service';
import { concatMap, of, Subject, takeUntil } from 'rxjs';

interface LocationState {
  navigationId: number;
  show: ShowClass;
}

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit, OnDestroy {
  show: ShowClass | undefined = undefined;
  private destroy$: Subject<void> = new Subject<void>();
  constructor(
    private location: Location,
    private tvMazeService: TvmazeApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const locationState = this.location.getState() as LocationState;
    this.show = locationState?.show;

    if (!this.show) {
      this.route.params
        .pipe(
          concatMap(params => {
            if (!params['show-id']) return of(undefined);

            const showId = params['show-id'];
            return this.tvMazeService.getShow(showId);
          }),
          takeUntil(this.destroy$)
        )
        .subscribe(result => {
          if (!result) {
            this.router.navigateByUrl('/');
            return;
          }
          this.show = result;
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
