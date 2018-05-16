import { TestBed, inject } from '@angular/core/testing';

import { TeaImageService } from './tea-image.service';

describe('TeaImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaImageService]
    });
  });

  it('should be created', inject([TeaImageService], (service: TeaImageService) => {
    expect(service).toBeTruthy();
  }));
});
