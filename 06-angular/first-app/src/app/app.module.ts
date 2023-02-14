import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  /* All UI entities (Components, Directives & Pipes) */
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  /* Dependency Modules */
  imports: [
    BrowserModule
  ],
  /* All NON-UI entities (Services)*/
  providers: [],

  /* Root Component(s) */
  bootstrap: [
    AppComponent,
    CalculatorComponent
  ]
})
export class AppModule { }
