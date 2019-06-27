import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FlowRequest} from "../flow-request";
import {MessageService} from "../../data/message.service";
import {BotConnect} from "../azure/BotConnect";
import {Sizes} from "../../jquery/sizes";
import {UserInputController} from "../controlllers/UserInputController";




/**
 * This component is the text field the user interacts with when he or she is talking to Jax.
 * The message is being stored as an object and passed on to the message service.
 *
 */


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
    this.userInput = new UserInputController(mess, this.botConnect);
  }

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.mess.currentMessage.subscribe(message => this.sentence = message);

    //this JQuery script is used to generate the width of the textfield according to the width of the device
    Sizes.textBarSize();

  }
  onClick() {

    let message = this.message.value;
    this.userInput.sendUserGeneratedMessage(message);
    this.message.reset()
  }




}
