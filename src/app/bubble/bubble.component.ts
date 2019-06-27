import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';



/**
Both Bubble-right and Bubble-Left extend from this component. This has a limited function at the moment and it should be
 removed in further development
 */


//TODO Convert Bubble-left or Bubble-right to be the parent and remove this class


@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  @ViewChild("bubble") MyProp: ElementRef;


  constructor() { }

  @Input() message: String;

  ngOnInit() {
    //console.log("test")
  }

}
