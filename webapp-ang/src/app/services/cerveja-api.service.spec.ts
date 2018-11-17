import { TestBed, inject } from '@angular/core/testing';

import { CervejaApiService } from './cerveja-api.service';

describe('CervejaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CervejaApiService]
    });
  });

  it('should be created', inject([CervejaApiService], (service: CervejaApiService) => {
    expect(service).toBeTruthy();
  }));
});
