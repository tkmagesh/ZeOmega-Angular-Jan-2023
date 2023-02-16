import { Component, OnInit } from "@angular/core";
import { BugSortEventArgs } from "./components/bug-sort/bug-sort.component";
import { Bug } from "./models/bug";
import { BugApiService } from "./services/bugApi.service";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent implements OnInit{
    bugs : Bug[] = []

    sortByAttrName : string = ''
    sortByDesc : boolean = false
    

    constructor(
        public bugOperations : BugOperationsService,
        private bugApi : BugApiService
        ){

    }
    ngOnInit(): void {
        this.bugApi
            .getAll()
            .subscribe(bugs => {
                this.bugs = bugs
            });
    }

    onBugAdded(newBug : Bug){
        this.bugs = [...this.bugs, newBug]
    }

    onSortChanged(sortEvtArg: BugSortEventArgs){
        this.sortByAttrName = sortEvtArg.attrName
        this.sortByDesc = sortEvtArg.desc
    }
   

    onBugNameClick(bugToToggle : Bug) {
        const toggledBugData = this.bugOperations.toggle(bugToToggle)
        this.bugApi
            .save(toggledBugData)
            .subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug))
        
    }

    onBtnRemoveClick(bugToRemove : Bug){
        this.bugApi
            .remove(bugToRemove)
            .subscribe(_ => this.bugs = this.bugs.filter(bug => bug.id != bugToRemove.id))
        
    }

    onBtnRemoveClosedClick(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(this.onBtnRemoveClick, this)
    }
}