import { Component } from "@angular/core";
import { Bug } from "./models/bug";



@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{
    bugs : Bug[] = [
        
    ]

    private _currentBugId : number = 0

    onBtnAddNewClick(newBugName : string){
        const newBug : Bug = {
            id : ++this._currentBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        } 
        this.bugs.push(newBug)

    }

    onBtnRemoveClick(bugToRemove : Bug){
        // this.bugs = this.bugs.filter(bugName => bugName != bugToRemove)
    }

}