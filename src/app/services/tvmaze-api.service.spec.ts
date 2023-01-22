import { TestBed } from '@angular/core/testing';
import { TvmazeApiService } from './tvmaze-api.service';

describe('TvmazeApiService', () => {
  let service: TvmazeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvmazeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
