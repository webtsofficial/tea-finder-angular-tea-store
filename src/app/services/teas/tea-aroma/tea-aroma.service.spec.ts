import { TestBed, inject } from '@angular/core/testing';

import { TeaAromaService } from './tea-aroma.service';

describe('TeaAromaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaAromaService]
    });
  });

  it('should be created', inject([TeaAromaService], (service: TeaAromaService) => {
    expect(service).toBeTruthy();
  }));
});
