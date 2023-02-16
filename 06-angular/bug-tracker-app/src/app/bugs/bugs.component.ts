import { Component } from "@angular/core";
import { Bug } from "./models/bug";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{
    bugs : Bug[] = []

    sortByAttrName : string = ''
    sortByDesc : boolean = false
    

    constructor(public bugOperations : BugOperationsService){

    }
   
    onBugAdded(newBug : Bug){
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