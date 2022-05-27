import { TestBed } from '@angular/core/testing';

import { HeroPhraseGeneratorServiceService } from './hero-phrase-generator-service.service';

describe('HeroPhraseGeneratorServiceService', () => {
  let service: HeroPhraseGeneratorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroPhraseGeneratorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
