import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-page-http-client',
  templateUrl: './page-http-client.component.html',
  styleUrls: ['./page-http-client.component.css']
})
export class PageHttpClientComponent implements OnInit {

  readonly state$ = this.business.state$

  constructor(private business: BusinessService) { }

  ngOnInit() {
  }

  update(options: { fail: boolean; } = { fail: false }) {
    console.log('update', options)
    this.business.update(options);
  }

}
