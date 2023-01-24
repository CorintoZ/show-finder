import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TvmazeApiService } from './tvmaze-api.service';

describe('TvmazeApiService', () => {
  let service: TvmazeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TvmazeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('empty string on init', (done: DoneFn) => {
    service.query$.asObservable().subscribe(val => {
      expect(val).toBe('');
      done();
    });
  });

  it('empty array on search results', (done: DoneFn) => {
    spyOn(service, 'getShowResults').and.returnValue(of([]));
    service.searchResults().subscribe(results => {
      expect(results.length).toBe(0);
      done();
    });
  });
});
