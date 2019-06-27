import { Component, OnInit } from '@angular/core';

/**
 This class is a component that shows the bar on top of the application with an image of Jax
 */




@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  title = "Ajax Assistant";

  constructor() { }

  ngOnInit() {
  }

}
