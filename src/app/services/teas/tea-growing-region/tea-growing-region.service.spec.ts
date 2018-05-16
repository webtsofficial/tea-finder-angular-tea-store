import { TestBed, inject } from '@angular/core/testing';

import { TeaGrowingRegionService } from './tea-growing-region.service';

describe('TeaGrowingRegionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaGrowingRegionService]
    });
  });

  it('should be created', inject([TeaGrowingRegionService], (service: TeaGrowingRegionService) => {
    expect(service).toBeTruthy();
  }));
});
