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
        {id : 1, name : "Server communication failure", isClosed : false, createdAt : new Date(2023,1,11)},
        { id: 2, name: "Data integrity checks failed", isClosed: true, createdAt: new Date(2023, 1, 10) },
        { id: 3, name: "User access denied", isClosed: true, createdAt: new Date(2023, 1, 9) },
        { id: 4, name: "Application not responding", isClosed: false, createdAt: new Date(2023, 1, 7) }
        
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