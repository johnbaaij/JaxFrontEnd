import {Component, Input, OnInit} from '@angular/core';
import {BubbleComponent} from "../bubble/bubble.component";

@Component({
  selector: 'app-bubble-left',
  templateUrl: './bubble-left.component.html',
  styleUrls: ['./bubble-left.component.scss']
})
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
