
export class CalculatorService {
    x: number = 0
    y: number = 0
    result: number = 0

    add()  {
        this.result = this.x + this.y
    }
    subtract() {
        this.result = this.x - this.y
    }
    multiply() {
        this.result = this.x * this.y
    }
    divide() {
        this.result = this.x / this.y
    }
}