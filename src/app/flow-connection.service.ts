import { Injectable } from '@angular/core';

import {LiveClient, Message, Originator} from "flowai-js";



const clientId = "MWZmYWVmNDAtZmU3NS00MWYyLWIxMTAtN2ViOTg5Yjk3MDQxfGRhYmM1MjcyLTMzODYtNDgyMi05NWJlLWNlMmVjODMyZDIzNg==";


// Fired whenever the client connects


// Start the connection
//client.start();


export class FlowConnectionService {

  client: any;
  clientId = "MWZmYWVmNDAtZmU3NS00MWYyLWIxMTAtN2ViOTg5Yjk3MDQxfGRhYmM1MjcyLTMzODYtNDgyMi05NWJlLWNlMmVjODMyZDIzNg==";

  constructor(client: any) {
    this.client = this.getClient(clientId)

  }

  getClient(clientId){
    return new LiveClient({
      clientId: clientId,
      origin: 'https://my.site'
    });
  }

  sendMessage(message){
    this.client.send(message);
  }

}
