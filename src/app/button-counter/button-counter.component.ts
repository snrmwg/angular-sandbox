import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.count++;
  }
}
