import { Component, OnInit } from '@angular/core';
import {BotConnect} from "./azure/BotConnect";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prototype';
  botConnect: BotConnect;

  constructor() {
  }

  ngOnInit() {


  }

}
