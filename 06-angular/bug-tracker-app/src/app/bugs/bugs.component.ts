import { Component } from "@angular/core";
import { Bug } from "./models/bug";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{
    bugs : Bug[] = [
        
    ]

    constructor(public bugOperations : BugOperationsService){

    }
   

    onBtnAddNewClick(newBugName : string){
        const newBug = this.bugOperations.createNew(newBugName)
        this.bugs.push(newBug)

    }

   /*  onBugNameClick(bugToToggle : Bug) {
        this.bugOperations.toggle(bugToToggle)
    } */

    onBtnRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug.id != bugToRemove.id)
    }

    onBtnRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed)
    }

    getClosedCount() : number {
        return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }

}