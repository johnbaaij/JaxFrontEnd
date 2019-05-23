import { Injectable } from '@angular/core';
import {ChatMessage} from "../models/chatmessage";
import {BehaviorSubject, ReplaySubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class MessageService {



  private messageSource = new ReplaySubject(1);
  currentMessage = this.messageSource.asObservable();

  private receivedMessageSource = new ReplaySubject(1);
  receivedCurrentMessage = this.receivedMessageSource.asObservable();
  private date = new Date();

  constructor() {
  }

  changeMessage(chat: ChatMessage){
    this.receivedMessageSource.next(chat);
    console.log(chat);

  }

  changeReceivedMessage(chat: ChatMessage){
    this.receivedMessageSource.next(chat)

  }

}
