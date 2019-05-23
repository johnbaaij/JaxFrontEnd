import { TestBed } from '@angular/core/testing';

import { FlowConnectionService } from './flow-connection.service';

describe('FlowConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowConnectionService = TestBed.get(FlowConnectionService);
    expect(service).toBeTruthy();
  });
});
