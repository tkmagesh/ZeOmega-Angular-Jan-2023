
export class AdvCalculatorService {
    add(x: number, y: number): number {
        return 2 * (x + y)
    }
    subtract(x: number, y: number): number {
        return 2 * (x - y)
    }
    multiply(x: number, y: number): number {
        return 2 * (x * y)
    }
    divide(x: number, y: number): number {
        return 2 * (x / y)
    }
}