import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TvmazeApiService } from 'src/app/services/tvmaze-api.service';

import { SearchWrapperComponent } from './search-wrapper.component';

describe('SearchWrapperComponent', () => {
  let component: SearchWrapperComponent;
  let fixture: ComponentFixture<SearchWrapperComponent>;
  const tvMazeServiceSpyObj = jasmine.createSpyObj('tvMazeService', ['getShowResults']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchWrapperComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: TvmazeApiService, useValue: tvMazeServiceSpyObj }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect not results if empty array', () => {
    component.showResults$ = of([]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#noResults')).toBeTruthy();
  });

  it('empty array on search results', (done: DoneFn) => {
    tvMazeServiceSpyObj.getShowResults.and.returnValue(of([]));
    component.handleQuery('');
    fixture.detectChanges();
    // expect(tvMazeServiceSpyObj.getShowResults).toHaveBeenCalled();
    component.showResults$.subscribe(results => {
      expect(results.length).toBe(0);
      done();
    });
  });
});
