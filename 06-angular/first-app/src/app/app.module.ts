import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Calculator2Component } from './calculator-2/calculator-2.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { AdvCalculatorService } from './services/adv-calcualtor.service';
import { CalculatorService } from './services/calculator.service';


@NgModule({
  /* All UI entities (Components, Directives & Pipes) */
  declarations: [
    AppComponent,
    CalculatorComponent,
    Calculator2Component,
    CalculatorResultComponent,
    ProductsComponent
  ],
  /* Dependency Modules */
  imports: [
    BrowserModule
  ],
  /* All NON-UI entities (Services)*/
  providers: [
    { provide : CalculatorService, useClass : CalculatorService }
    // CalculatorService
  ],

  /* Root Component(s) */
  bootstrap: [
    AppComponent,
    CalculatorComponent,
    Calculator2Component,
    ProductsComponent
  ]
})
export class AppModule { }
