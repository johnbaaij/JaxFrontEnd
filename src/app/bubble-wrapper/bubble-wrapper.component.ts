import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from "../../models/chatmessage";

@Component({
  selector: 'app-bubble-wrapper',
  templateUrl: './bubble-wrapper.component.html',
  styleUrls: ['./bubble-wrapper.component.scss']
})
export class BubbleWrapperComponent implements OnInit {


  received: boolean;
  message: string;


  @Input() chatMessage: ChatMessage;


  constructor() {
  }


  ngOnInit() {

    let chat = this.chatMessage;

    console.log(chat);
    this.received = chat.isReceived;
    this.message = chat.message;

  }

}
