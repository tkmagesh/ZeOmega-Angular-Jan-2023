import { TestBed } from "@angular/core/testing"
import { Greeter } from "./greeter"
import { TimeSerivce } from "./time.service"

fdescribe('Greeter', () => {
    describe('When greeting a user', () => {
        
        it("should greet with 'Good Morning' before 12" , () => {

            const timeServiceSpy = jasmine.createSpyObj("timeService", ['getCurrent'])
            timeServiceSpy.getCurrent.and.returnValue(new Date(2023, 1, 10, 9, 0, 0))

            TestBed.configureTestingModule({
                providers: [
                    Greeter,
                    { provide : TimeSerivce, useValue : timeServiceSpy}
                ]
            })

            // const greeter = new Greeter(timeServiceSpy)
            const greeter = TestBed.inject(Greeter)
            const msg = greeter.greet("Magesh")
            const expectedMsg = `Hi Magesh, Good Morning!`
            expect(msg).toBe(expectedMsg)
        })

        it("should greet with 'Good Day' after 12", () => {
            const timeServiceSpy = jasmine.createSpyObj("timeService", ['getCurrent'])
            timeServiceSpy.getCurrent.and.returnValue(new Date(2023, 1, 10, 13, 0, 0))

            TestBed.configureTestingModule({
                providers: [
                    Greeter,
                    { provide: TimeSerivce, useValue: timeServiceSpy }
                ]
            })

            // const greeter = new Greeter(timeServiceSpy)
            const greeter = TestBed.inject(Greeter)
            const msg = greeter.greet("Magesh")
            const expectedMsg = `Hi Magesh, Good Day!`
            expect(msg).toBe(expectedMsg)
        })
    })
})