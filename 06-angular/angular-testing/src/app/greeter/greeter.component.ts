import { Component } from "@angular/core";
import { Greeter } from "./greeter";

@Component({
    selector: "app-greeter",
    template : `
        <h1>Greeter</h1>
        <hr>
        <label for="">User Name :</label>
        <input type="text" name="" id="txtUserName" (input)="userName = $any($event.target).value">
        <input type="button" value="Greet" (click)="onGreetClick()">
        <div class="message">{{greetMessage}}</div>
    `,
    styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
    userName : string = ''
    greetMessage : string = ''

    constructor(private greeterService : Greeter){

    }
    onGreetClick(){
        this.greetMessage = this.greeterService.greet(this.userName);
    }
}