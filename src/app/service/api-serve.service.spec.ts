/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiServeService } from './api-serve.service';

describe('Service: ApiServe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiServeService]
    });
  });

  it('should ...', inject([ApiServeService], (service: ApiServeService) => {
    expect(service).toBeTruthy();
  }));
});
