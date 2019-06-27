import {ChatMessage} from "../../models/chatmessage";
import {BotConnect} from "../azure/BotConnect";
import {MessageService} from "../../data/message.service";

export class UserInputController{


  constructor(private mess: MessageService, private botConnect: BotConnect){

  }

  sendUserGeneratedMessage(message){
    let sentence = new ChatMessage(message, false, 0);
    this.botConnect.post(message);
    this.mess.changeMessage(sentence);
  }
}
