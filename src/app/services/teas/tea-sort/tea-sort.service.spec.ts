import { TestBed, inject } from '@angular/core/testing';

import { TeaSortService } from './tea-sort.service';

describe('TeaSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaSortService]
    });
  });

  it('should be created', inject([TeaSortService], (service: TeaSortService) => {
    expect(service).toBeTruthy();
  }));
});
