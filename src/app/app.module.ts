import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { ButtonCounterComponent } from './button-counter/button-counter.component';
import { TickingComponent } from './ticking/ticking.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListImmutableComponent } from './list-immutable/list-immutable.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ButtonCounterComponent,
    TickingComponent,
    ListComponent,
    ListItemComponent,
    ListImmutableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
