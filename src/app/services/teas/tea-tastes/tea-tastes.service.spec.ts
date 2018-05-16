import { TestBed, inject } from '@angular/core/testing';

import { TeaTastesService } from './tea-tastes.service';

describe('TeaTastesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaTastesService]
    });
  });

  it('should be created', inject([TeaTastesService], (service: TeaTastesService) => {
    expect(service).toBeTruthy();
  }));
});
