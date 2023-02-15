import { Bug } from "../models/bug";

export class BugOperationsService{
    private _currentBugId: number = 0

    createNew(newBugName : string) : Bug {
        const newBug: Bug = {
            id: ++this._currentBugId,
            name: newBugName,
            isClosed: false,
            createdAt: new Date()
        } 
        return newBug
    }

    //mutable
    /* 
    toggle(bugToToggle : Bug) {
        bugToToggle.isClosed = !bugToToggle.isClosed
    } 
    */
    //immutable
    toggle(bugToToggle: Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed }
        return toggledBug
    }
}