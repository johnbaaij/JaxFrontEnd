import { Component, OnInit } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


/**
 * The app component is mainly used to provide the user with the message to update the webapp.
 * the webapp is a progressive web app (PWA) and this component provides the service workers
 *
 * Routing is enabled but not used at the moment but it might be used in further development
 */



export class AppComponent implements OnInit{
  title = 'prototype';
  message;

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if(confirm("New version available. Load New Version?")) {

          window.location.reload();
        }
      });
    }
  }

}
