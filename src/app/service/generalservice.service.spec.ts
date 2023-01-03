/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralserviceService } from './generalservice.service';

describe('Service: Generalservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralserviceService]
    });
  });

  it('should ...', inject([GeneralserviceService], (service: GeneralserviceService) => {
    expect(service).toBeTruthy();
  }));
});
