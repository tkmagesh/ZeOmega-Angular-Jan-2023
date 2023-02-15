import { Component } from "@angular/core";
import { CalculatorService } from "../services/calculator.service";

@Component({
    selector : 'app-calculator-2',
    templateUrl : 'calculator-2.component.html',
    styleUrls : ['calculator-2.component.css'],
    providers : [CalculatorService]
})
export class Calculator2Component{
    

    resultStyle: string = 'result'
    selectedOperation : string = ''
    errorMessage : string = ''

    /* 
     setN1(val : string) {
         this.n1 = Number(val)
     }
 
     setN2(val : string) {
         this.n2 = Number(val)
     } 
     */

     constructor(public calculatorService : CalculatorService){

     }

    set n1(val: string) {
        this.calculatorService.x = Number(val)
    }

    set n2(val: string) {
        this.calculatorService.y = Number(val)
    }

    set operation(val : string) {
        this.selectedOperation = val
    }

    onBtnCalculateClick(){
        if (this.selectedOperation == ''){
            this.errorMessage = 'Invalid operation selection!'
            return
        }
        switch (this.selectedOperation) {
            case 'add':
                this.calculatorService.add()
                break;
            case 'subtract':
                this.calculatorService.subtract()
                break;
            case 'multiply':
                this.calculatorService.multiply()
                break;
            case 'divide':
                this.calculatorService.divide()
                break;
            default:
                break;
        }
        this.errorMessage = ''
    }


}