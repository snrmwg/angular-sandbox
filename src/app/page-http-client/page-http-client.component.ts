import { Component } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-page-http-client',
  templateUrl: './page-http-client.component.html',
  styleUrls: ['./page-http-client.component.css']
})
export class PageHttpClientComponent {

  readonly state$ = this.business.state$

  constructor(private business: BusinessService) { }

  update(options: { fail: boolean; } = { fail: false }) {
    this.business.update(options);
  }

}
