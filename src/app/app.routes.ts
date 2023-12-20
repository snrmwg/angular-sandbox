import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { PageHttpClientComponent } from './page-http-client/page-http-client.component';
import { PageHttpClientAutoComponent } from './page-http-client-auto/page-http-client-auto.component';

export const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'http-client', component: PageHttpClientComponent },
  { path: 'http-client-auto', component: PageHttpClientAutoComponent },
  // add more routes here
];
