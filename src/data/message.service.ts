import { Injectable } from '@angular/core';
import {ChatMessage} from "../models/chatmessage";
import {BehaviorSubject, ReplaySubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class MessageService {

  /**
   *This class is used to move the messages around within the app so it can be shown in the bubbles and the webpage can
   * be updated with the newly acquired message.The timeout is used to make it easier on the eye if the user receives
   * multiple messages. Both functions can be replaced by just one function in further development by adding a isReceived parameter
   * to the function.
   *
   *
   *TODO add isReceived parameter
   */



  private messageSource = new ReplaySubject(0);
  currentMessage = this.messageSource.asObservable();

  private receivedMessageSource = new ReplaySubject(0);
  receivedCurrentMessage = this.receivedMessageSource.asObservable();

  constructor() {
  }

  changeMessage(chat: ChatMessage){

    let i = true;

    while (i == true){


      setTimeout(() =>{
        this.messageSource.next(chat);
      }, 200);
      i = false;
    }
    console.log(chat);

  }

   changeReceivedMessage(chat: ChatMessage){
    let i = true;

    while (i == true){

      setTimeout(() =>{
        this.receivedMessageSource.next(chat);
      }, 200);
      i = false;
    }
    console.log(chat);

  }

}
