import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SearchWrapperComponent } from './search-wrapper.component';

describe('SearchWrapperComponent', () => {
  let component: SearchWrapperComponent;
  let fixture: ComponentFixture<SearchWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchWrapperComponent],
      imports: [HttpClientTestingModule],
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
});
