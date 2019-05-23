import {Component, Input, OnInit} from '@angular/core';
import {BubbleComponent} from "../bubble/bubble.component";
import {ChatMessage} from "../../models/chatmessage";

@Component({
  selector: 'app-bubble-right',
  templateUrl: './bubble-right.component.html',
  styleUrls: ['./bubble-right.component.scss']
})
export class BubbleRightComponent extends BubbleComponent implements OnInit {

  constructor() {
    super();
  }

  right ="right";

  @Input() name: string;
  ngOnInit() {
    window.scrollTo(0,document.body.scrollHeight);

  }

}
