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

    sortByAttrName : string = ''
    sortByDesc : boolean = false
    

    constructor(public bugApi : BugApiService){

    }
    ngOnInit(): void {
        this.bugApi.getAll()
           
    }

    onSortChanged(sortEvtArg: BugSortEventArgs){
        this.sortByAttrName = sortEvtArg.attrName
        this.sortByDesc = sortEvtArg.desc
    }
   

    onBugNameClick(bugToToggle : Bug) {
        this.bugApi.toggle(bugToToggle)
    }

    onBtnRemoveClick(bugToRemove : Bug){
        this.bugApi.remove(bugToRemove)
    }

    onBtnRemoveClosedClick(){
        this.bugApi.removeClosed()
    }
}