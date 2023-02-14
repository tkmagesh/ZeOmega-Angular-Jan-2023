import { Component } from "@angular/core";

@Component({
    selector : 'app-calculator-2',
    templateUrl : 'calculator-2.component.html',
    styleUrls : ['calculator-2.component.css']
})
export class Calculator2Component{
    result: number = 0
    #n1: number = 0
    #n2: number = 0

    resultStyle: string = 'result'
    selectedOperation : string = ''

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

    set operation(val : string) {
        this.selectedOperation = val
    }

    onBtnCalculateClick(){
        switch (this.selectedOperation) {
            case 'add':
                this.result = this.#n1 + this.#n2
                break;
            case 'subtract':
                this.result = this.#n1 - this.#n2
                break;
            case 'multiply':
                this.result = this.#n1 * this.#n2
                break;
            case 'divide':
                this.result = this.#n1 / this.#n2
                break;
            default:
                break;
        }
    }


}