import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sandbox';

  name = 'unknown'

  private nextNameIndex = 0

  changeName() {
    this.name = names[this.nextNameIndex]
    this.nextNameIndex = (this.nextNameIndex + 1) % names.length
  }
}

const names = ['Peter', 'Paul', 'Mary']
