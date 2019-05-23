import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {element} from "protractor";

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
    console.log("test")
  }

}
