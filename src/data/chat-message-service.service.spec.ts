import { TestBed } from '@angular/core/testing';

import { ChatMessageServiceService } from './chat-message-service.service';

describe('ChatMessageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatMessageServiceService = TestBed.get(ChatMessageServiceService);
    expect(service).toBeTruthy();
  });
});
