import { Injectable } from "@angular/core"
import { TimeSerivce } from "./time.service"

@Injectable()
export class Greeter {
    constructor(private timeService : TimeSerivce){

    }
    greet(name : string) : string {
        // const currentTime = new Date()
        const currentTime = this.timeService.getCurrent()
        if (currentTime.getHours() < 12) {
            return `Hi ${name}, Good Morning!`
        } else {
            return `Hi ${name}, Good Day!`
        }
    }
}