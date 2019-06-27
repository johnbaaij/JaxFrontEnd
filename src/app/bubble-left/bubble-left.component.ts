import {Component, Input, OnInit} from '@angular/core';
import {BubbleComponent} from "../bubble/bubble.component";

@Component({
  selector: 'app-bubble-left',
  templateUrl: './bubble-left.component.html',
  styleUrls: ['./bubble-left.component.scss']
})




/**
 * Bubble left and Bubble right share the same purpose. They both display a message that is created by the user
 * or the chatbot.
 */

//TODO make the bubbles a display:grid in css
export class BubbleLeftComponent extends BubbleComponent implements OnInit {

  constructor() {
    super();
  }

  test = "left";

  @Input() received: string;


  ngOnInit() {
    window.scrollTo(0,document.body.scrollHeight);

  }

}
