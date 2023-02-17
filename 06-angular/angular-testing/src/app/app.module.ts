import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Greeter } from './greeter/greeter';
import { TimeSerivce } from './greeter/time.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Greeter,
    TimeSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
