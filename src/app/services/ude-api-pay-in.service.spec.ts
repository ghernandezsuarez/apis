import { TestBed, inject } from '@angular/core/testing';

import { UdeApiPayInService } from './ude-api-pay-in.service';

describe('UdeApiPayInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdeApiPayInService]
    });
  });

  it('should be created', inject([UdeApiPayInService], (service: UdeApiPayInService) => {
    expect(service).toBeTruthy();
  }));
});
