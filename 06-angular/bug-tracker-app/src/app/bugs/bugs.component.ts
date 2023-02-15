import { Component } from "@angular/core";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{
    bugs : string[] = [
        
    ]

    onBtnAddNewClick(newBugName : string){
        this.bugs.push(newBugName)
    }

    onBtnRemoveClick(bugToRemove : string){
        this.bugs = this.bugs.filter(bugName => bugName != bugToRemove)
    }

}