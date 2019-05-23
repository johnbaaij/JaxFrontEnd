import { ChatMessage } from './chatmessage';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new ChatMessage(null, null,null)).toBeTruthy();
  });
});
