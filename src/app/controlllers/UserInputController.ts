import {ChatMessage} from "../../models/chatmessage";
import {BotConnect} from "../azure/BotConnect";
import {MessageService} from "../../data/message.service";

export class UserInputController{
  private botConnect: BotConnect;


  constructor(private mess: MessageService){
    this.botConnect = new BotConnect(mess);

  }

  sendUserGeneratedMessage(message){
    let sentence = new ChatMessage(message, false, 0);
    this.botConnect.post(message);
    this.mess.changeMessage(sentence);
  }
}
