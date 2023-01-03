/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpseviceService } from './httpsevice.service';

describe('Service: Httpsevice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpseviceService]
    });
  });

  it('should ...', inject([HttpseviceService], (service: HttpseviceService) => {
    expect(service).toBeTruthy();
  }));
});
