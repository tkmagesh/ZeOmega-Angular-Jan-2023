import { ComponentFixture, TestBed } from "@angular/core/testing"
import { GreeterComponent } from "./greeter.component"
import { Greeter } from "./greeter";
import { TimeSerivce } from "./time.service"

describe("Greeter Component", () => {
    let fixture : ComponentFixture<GreeterComponent>;
    let greeterComponent : GreeterComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GreeterComponent],
            providers: [Greeter, TimeSerivce]
        });

        fixture = TestBed.createComponent(GreeterComponent);
        greeterComponent = fixture.componentInstance;
    })

    it ("Should be able to create an instance", () =>{
        expect(greeterComponent).toBeTruthy("Error creating an instance");
    })

    it("Should have the userName initialized to empty string", () =>{
        expect(greeterComponent.userName).toBe("");
    });

    it("Should have the greet message initialized to empty string", () =>{
        expect(greeterComponent.greetMessage).toBe("");
    });

    it("should generate the message when greeted", () => {
        greeterComponent.userName = "John";
        const greeter = TestBed.inject(Greeter);
        spyOn(greeter, 'greet').and.returnValue('test message')
        greeterComponent.onGreetClick();
        expect(greeterComponent.greetMessage).toBe('test message');
    });

    it("should display the message when greeted with a name", () => {
        greeterComponent.userName = "John";
        const greeter = TestBed.inject(Greeter);
        spyOn(greeter, 'greet').and.returnValue('test message')
        greeterComponent.onGreetClick();
        const el = fixture.debugElement;
        const nativeElement = fixture.nativeElement;
        fixture.detectChanges();
        const greetMessageElement = nativeElement.querySelector(".message")
        expect(greetMessageElement.textContent).toBe("test message");
    });

    it("should display a greet message for the username entered in the textbox", () => {
        const nativeElement = fixture.nativeElement;
        const userNameTextBox = nativeElement.querySelector("#txtUserName");
        userNameTextBox.value = "John";
        const greeter = TestBed.inject(Greeter);
        spyOn(greeter, 'greet').and.returnValue('test message')
        userNameTextBox.dispatchEvent(new Event("input"));
        
        const btnGreet = nativeElement.querySelector("input[value='Greet']");
        btnGreet.dispatchEvent(new Event("click"));

        fixture.detectChanges();
        const greetMessageElement = nativeElement.querySelector(".message")
        expect(greetMessageElement.textContent).toBe("test message");
    })
   
})