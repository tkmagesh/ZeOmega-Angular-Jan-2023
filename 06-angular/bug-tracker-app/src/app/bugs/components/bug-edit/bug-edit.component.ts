import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from "../../models/bug";
import { BugApiService } from "../../services/bugApi.service";
import { BugOperationsService } from "../../services/bugOperations.service";

@Component({
    selector : 'app-bug-edit',
    templateUrl : 'bug-edit.component.html',
    styleUrls: ['bug-edit.component.css']
})
export class BugEditComponent{
    newBugName: string = ''

    @Output()
    bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>()

    constructor(
        private bugOperations : BugOperationsService,
        private bugApi : BugApiService
    ){

    }
    onBtnAddNewClick() {
        const newBugData = this.bugOperations.createNew(this.newBugName)
        this.bugApi.save(newBugData)
    }
}