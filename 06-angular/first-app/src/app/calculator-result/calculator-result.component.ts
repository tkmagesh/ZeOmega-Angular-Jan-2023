import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-calculator-result',
    templateUrl : 'calculator-result.component.html',
    styleUrls : ['calculator-result.component.css']
})
export class CalculatorResultComponent{
    resultStyle: string = 'result'

    @Input('data')
    result : number = 0
}