import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { ButtonCounterComponent } from './button-counter/button-counter.component';
import { TickingComponent } from './ticking/ticking.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListImmutableComponent } from './list-immutable/list-immutable.component';
import { Page1Component } from './page1/page1.component';
import { PageHttpClientComponent } from './page-http-client/page-http-client.component';
import { PageHttpClientAutoComponent } from './page-http-client-auto/page-http-client-auto.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ButtonCounterComponent,
    TickingComponent,
    ListComponent,
    ListItemComponent,
    ListImmutableComponent,
    Page1Component,
    PageHttpClientComponent,
    PageHttpClientAutoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
