import { TestBed } from '@angular/core/testing';

import { FService } from './f.service';

describe('FService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FService = TestBed.get(FService);
    expect(service).toBeTruthy();
  });
});
