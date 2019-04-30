import { Component, OnInit } from '@angular/core';
import {DataFetchService} from "../data/data-fetch.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prototype';

  constructor(private data : DataFetchService) { }

  ngOnInit() {




    //this.message.valueChanges.subscribe(console.log)
  }

}
