import { Component } from "@angular/core";
import { CalculatorService } from "../services/calculator.service";

@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html',
    styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{
    
    result : number = 0
    #n1 : number = 0
    #n2 : number = 0

    resultStyle : string = 'result'
    
    /* 
    calculatorService! : CalculatorService;

    constructor(calculatorService : CalculatorService){
        this.calculatorService = calculatorService
    } 
    */
    constructor(public calculatorService : CalculatorService){

    }


   /* 
    setN1(val : string) {
        this.n1 = Number(val)
    }

    setN2(val : string) {
        this.n2 = Number(val)
    } 
    */

    set n1(val: string) {
        this.#n1 = Number(val)
    }

    set n2(val: string) {
        this.#n2 = Number(val)
    }

    onBtnAddClick(){
        this.result = this.calculatorService.add(this.#n1, this.#n2)
    }

    onBtnSubtractClick(){
        this.result = this.calculatorService.subtract(this.#n1, this.#n2)
    }

    onBtnMultiplyClick(){
        this.result = this.calculatorService.multiply(this.#n1, this.#n2)
    }

    onBtnDivideClick(){
        this.result = this.calculatorService.divide(this.#n1, this.#n2)
    }
}