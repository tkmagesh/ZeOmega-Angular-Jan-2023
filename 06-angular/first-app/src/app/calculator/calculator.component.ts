import { Component } from "@angular/core";

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
        this.result = this.#n1 + this.#n2
    }

    onBtnSubtractClick(){
        this.result = this.#n1 - this.#n2
    }

    onBtnMultiplyClick(){
        this.result = this.#n1 * this.#n2
    }

    onBtnDivideClick(){
        this.result = this.#n1 / this.#n2
    }
}