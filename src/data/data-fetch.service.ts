import { Injectable } from '@angular/core';
import {LiveClient, Message, Originator, EventAttachment} from "flowai-js";
import {MessageService} from "./message.service";
import {ChatMessage} from "../models/chatmessage";


const clientId = 'MWZmYWVmNDAtZmU3NS00MWYyLWIxMTAtN2ViOTg5Yjk3MDQxfGRhYmM1MjcyLTMzODYtNDgyMi05NWJlLWNlMmVjODMyZDIzNg==';


let message = new Message({
  // Thread Id limits the message just to John
  threadId: 'john',
  // The text to send
  speech: "Bye",
  // Person or system sending the message

});

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  public sendMessage(input:string){
    message = new Message({threadId: 'john',
      // The text to send
      speech: input,
      // Person or system sending the message
    });
    this.client.send(message)
  }


  private baseUrl ="https://api.flow.ai/socket.info/?clientId="+clientId+"&sessionId="+Date.now();



  client: LiveClient;
  message: Message;

  constructor(private mess: MessageService) {
    this.client = new LiveClient ({  clientId: clientId,
    });

    this.client.start();

    this.client.on(LiveClient.CONNECTED, () => {

      console.log('--> Connected');

      // Create the originator of the message
      const originator = new Originator({
        name: "Boss",
        profile :{
          locale: "nl-NL"
        }
      });

      this.message = new Message({  attachment: new EventAttachment('Introduction')
      })
      // Send
      this.client.send(message)
    });

    this.client.on(LiveClient.MESSAGE_DELIVERED, message => {
      // The message we have send has been delivered
      // check the traceId to see what message has been
      // delivered since it's an async method

      console.log("delivered")
    });

    this.client.on(LiveClient.REPLY_RECEIVED, message => {
      // Called when a bot or human operator
      // sends a message or reply
      if(message.threadId === 'john') {
        // Incoming message for John

        for (let i = 0; i < message.messages.length; i++){
          let chat = new ChatMessage(message.messages[i].fallback, true, 0);
          this.mess.changeReceivedMessage(chat);
          console.log(message.messages[i].fallback)

        }
      } else {
        // Incoming message for another user
      }
    });

    this.client.on(LiveClient.ERROR, err => {
      // This handler will be fired whenever an error
      // occurs during the connection
      console.error('Something bad happened', err)
    });

    this.client.on(LiveClient.DISCONNECTED, () => {
      // The client has been disconnected
    })

  }










}
