import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FlowRequest} from "../flow-request";
import {MessageService} from "../../data/message.service";
import {BotConnect} from "../azure/BotConnect";
import {Sizes} from "../../jquery/sizes";
import {UserInputController} from "../controlllers/UserInputController";


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  flow: FlowRequest[];
  sentMessages :String [];
  sentence:any;
  placeholder: String;
  botConnect: BotConnect;
  userInput: UserInputController;

  message = new FormControl('');


  constructor(private fb:FormBuilder, private mess: MessageService) {
    this.flow =[];
    this.sentMessages =[];
    this.placeholder = "Stuur een bericht";
    this.botConnect = new BotConnect(mess);
    this.userInput = new UserInputController(mess);
    //this.mess = new MessageService();
  }

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.mess.currentMessage.subscribe(message => this.sentence = message);
    Sizes.textBarSize();

  }
  onClick() {

    let message = this.message.value;
    this.userInput.sendUserGeneratedMessage(message);
    this.message.reset()
  }




}
