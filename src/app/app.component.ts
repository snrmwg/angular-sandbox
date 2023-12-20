import { Component } from '@angular/core';
import { BusinessService } from './business.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  JSON = JSON;

  constructor(protected business: BusinessService) {
  }
}
