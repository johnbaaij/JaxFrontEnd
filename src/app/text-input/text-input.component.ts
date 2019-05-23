import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DataFetchService} from "../../data/data-fetch.service";
import {FlowRequest} from "../flow-request";
import {ChatMessage} from "../../models/chatmessage";
import {MessageService} from "../../data/message.service";
import {BotConnect} from "../azure/BotConnect";
import {Sizes} from "../../jquery/sizes";


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  flow: FlowRequest[];
  sentMessages :String [];
  sentence:any;
  Chatsentence:ChatMessage;
  placeholder: String;
  botConnect: BotConnect;

  message = new FormControl('');


  constructor(private fb:FormBuilder, private mess: MessageService) {
    this.flow =[];
    this.sentMessages =[];
    this.placeholder = "Stuur een bericht"
    this.botConnect = new BotConnect(mess);
    //this.mess = new MessageService();
  }

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.mess.currentMessage.subscribe(message => this.sentence = message);
    Sizes.textBarSize();

  }
  onClick() {

    let message = this.message.value;
    console.log(message);
    let sentence = new ChatMessage(message, false, 0);
    this.botConnect.post(message);
    this.mess.changeMessage(sentence);
    this.message.reset()
  }




}
