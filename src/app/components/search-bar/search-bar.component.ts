import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { TvmazeApiService } from 'src/app/services/tvmaze-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup = new FormGroup({});
  constructor(private tvMazeService: TvmazeApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.searchForm
      .get('query')
      ?.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        map(q => this.tvMazeService.query$.next(q))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.tvMazeService.query$.next('');
  }

  public initForm() {
    this.searchForm.addControl('query', this.fb.control(''));
  }
}
