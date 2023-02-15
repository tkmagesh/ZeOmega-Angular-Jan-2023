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

    sortByAttrName : string = ''
    sortByDesc : boolean = false
    newBugName : string = ''

    constructor(public bugOperations : BugOperationsService){

    }
   

    onBtnAddNewClick(){
        const newBug = this.bugOperations.createNew(this.newBugName)
        // this.bugs.push(newBug)
        this.bugs = [...this.bugs, newBug]

    }

    onBugNameClick(bugToToggle : Bug) {
        const toggledBug = this.bugOperations.toggle(bugToToggle)
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
    }

    onBtnRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug.id != bugToRemove.id)
    }

    onBtnRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed)
    }

    getClosedCount() : number {
        console.info('getClosedCount() triggered')
        return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }

}