import {DirectLine} from 'botframework-directlinejs';
import {ChatMessage} from "../../models/chatmessage";
import {MessageService} from "../../data/message.service";

export class BotConnect{

  directLine: DirectLine;
  chatMessage: ChatMessage;

  constructor(mess: MessageService){


    this.directLine = new DirectLine({
      secret: 'vpxeRUqkRkw.Wjk0m1YSDK8jHjon5n07DPOjCbmWAZqJsmZOiBnjHZA'
    });

    this.directLine.activity$

      .filter(activity => activity.type === 'message' && activity.from.id === 'jax-chat-bot')
      .subscribe(
        response => {

          //without the ignore it gives an error
          // @ts-ignore
          let {text} = response;
          return mess.changeReceivedMessage(new ChatMessage(text, true, Date.now()));
        },
        error => console.log("Error posting activity", error))
  }


  public post(input){


    this.directLine.postActivity({
      from: { id: 'myUserId', name: 'myUserName' }, // required (from.name is optional)
      type: 'message',
      text: input
    }).subscribe(
      message => console.log("received message ", message)
    );



  }


}


