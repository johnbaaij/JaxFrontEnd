import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ChatMessage} from "../models/chatmessage";

@Injectable({
  providedIn: 'root'
})
export class ChatMessageServiceService {

  chatmessage : ChatMessage;
  message: string;

  constructor() {
  }


  public getChatMessage(): any {
    const chatMessageObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.chatmessage);
      }, 1000);
    });

    return chatMessageObservable;
  }
}
