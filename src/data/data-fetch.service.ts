import { Injectable } from '@angular/core';
import {LiveClient, Message, Originator, EventAttachment} from "flowai-js";
import {MessageService} from "./message.service";
import {ChatMessage} from "../models/chatmessage";



/**
 * This code was used to connect the chatbot to FLow.ai before the project moved to Azure.
 * I kept this in for the sake of documentation. It is currently not in use.
 *
 * Most code written here is a copy from the Github page from Flow.ai https://github.com/flow-ai/flowai-js but adapted
 * to TypeScript.
 *
 */


const clientId = 'client id is the key';


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

  //The Date is added to provide a unique identifier to the conversation. In further developent this should be adjusted to
  //make it more unique
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
