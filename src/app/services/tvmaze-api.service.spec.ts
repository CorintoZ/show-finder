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
});
