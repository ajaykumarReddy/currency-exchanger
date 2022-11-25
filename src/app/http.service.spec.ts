/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('Service: Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpService]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
