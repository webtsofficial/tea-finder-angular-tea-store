import { TestBed, inject } from '@angular/core/testing';

import { TeaCharacteristicService } from './tea-characteristic.service';

describe('TeaCharacteristicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaCharacteristicService]
    });
  });

  it('should be created', inject([TeaCharacteristicService], (service: TeaCharacteristicService) => {
    expect(service).toBeTruthy();
  }));
});
