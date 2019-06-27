import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from "../../models/chatmessage";

@Component({
  selector: 'app-bubble-wrapper',
  templateUrl: './bubble-wrapper.component.html',
  styleUrls: ['./bubble-wrapper.component.scss']
})
export class BubbleWrapperComponent implements OnInit {

  /**
   * This Component decides if the user is sending the message or the bot and it will put it in the corresponding bubble
   * By using this component the bubbles are displayed under each other instead of next to each other
   */

  //If the message is received by the user from the chatbot
  received: boolean;

  //THe text to be displayed in the bubble
  message: string;

  displayMessage = true;


  @Input() chatMessage: ChatMessage;


  constructor() {
  }


  ngOnInit() {

    let chat = this.chatMessage;


    this.received = chat.isReceived;


    //This statement can be removed in further development. Messages without context appeared because of database errors
    if (chat.message.length > 0){
      this.message = chat.message;
      this.displayMessage = true;

    }

    else{
      this.displayMessage = false;

    }

  }

}
