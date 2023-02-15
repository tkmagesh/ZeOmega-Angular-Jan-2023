import { Component } from "@angular/core";
import { CalculatorService } from "../services/calculator.service";

@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html',
    styleUrls : ['calculator.component.css'],
    providers : [CalculatorService]
})
export class CalculatorComponent{
    
    

    resultStyle : string = 'result'
    
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
        this.calculatorService.x = Number(val)
    }

    set n2(val: string) {
        this.calculatorService.y = Number(val)
    }

    onBtnAddClick(){
        this.calculatorService.add()
    }

    onBtnSubtractClick(){
        this.calculatorService.subtract()
    }

    onBtnMultiplyClick(){
        this.calculatorService.multiply()
    }

    onBtnDivideClick(){
        this.calculatorService.divide()
    }
}