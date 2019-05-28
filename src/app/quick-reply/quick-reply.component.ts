import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../../data/message.service";
import {UserInputController} from "../controlllers/UserInputController";

@Component({
  selector: 'app-quick-reply',
  templateUrl: './quick-reply.component.html',
  styleUrls: ['./quick-reply.component.scss']
})
export class QuickReplyComponent implements OnInit {
  //buttonText: string;
  private userInput: UserInputController;
  @Input() buttonText: String;

  constructor(private mess: MessageService) {
    //this.buttonText ="Button 1";
    this.userInput = new UserInputController(mess);


  }
  ngOnInit() {





  }

  onCLick() {

    this.userInput.sendUserGeneratedMessage(this.buttonText);


  }
}
