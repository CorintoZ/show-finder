import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() query = new EventEmitter();

  destroy$: Subject<void> = new Subject<void>();

  searchForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.searchForm
      .get('query')
      ?.valueChanges.pipe(debounceTime(1000), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(value => this.query.emit(value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  initForm() {
    this.searchForm.addControl('query', this.fb.control(''));
  }
}
