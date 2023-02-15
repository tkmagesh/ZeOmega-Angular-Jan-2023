import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from "../models/bug";

@Pipe({
    name : 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
    transform(bugs: Bug[], ...args: any[]) : number {
        console.info("closedCount.transform triggered")
        return bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }

}