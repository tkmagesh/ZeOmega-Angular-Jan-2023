import { Calculator } from "./calculator"


describe("Calculator", () => {

    describe('When adding', () => {
        let calculator : Calculator;

        beforeEach(() => {
            calculator = new Calculator()
        })

        it('should return result when given 2 postive numbers', () => {
            //Arrange
            const x = 100,
                y = 200,
                expectedResult = 300

            //Act
            const actualResult = calculator.add(x, y)

            //Assert
            expect(actualResult).toBe(expectedResult)
        })

        it('should return result when given 2 negative numbers', () => {
            const x = -100,
                y = -200,
                expectedResult = -300

            //Act
            const actualResult = calculator.add(x, y)

            //Assert
            expect(actualResult).toBe(expectedResult)
        })

    })

})

describe("Learning Jasmine Spy", () => {
    it("Creating and testing a spy", () => {
        const fn = jasmine.createSpy("testSpy");

        fn(10,20)
        // expect(fn).toHaveBeenCalled()
        expect(fn).toHaveBeenCalledWith(10,20)
        // expect(fn).toHaveBeenCalledTimes(2)       
    })
})