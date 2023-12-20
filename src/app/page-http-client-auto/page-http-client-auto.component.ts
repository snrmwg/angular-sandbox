import { Component } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-page-http-client-auto',
  templateUrl: './page-http-client-auto.component.html',
  styleUrls: ['./page-http-client-auto.component.css']
})
export class PageHttpClientAutoComponent {

  readonly state$ = this.business.stateAuto$();
  // .pipe(takeUntil(this.destroy$)); NOT REQUIRED HERE
  // because only subscription happens in html using async pipe
  // => can be verfied by log output in 'finalize' operator

  constructor(private business: BusinessService) { }

  setAutoOptions(options: { fail: boolean; }) {
    this.business.setAutoOptions(options);
  }

}
