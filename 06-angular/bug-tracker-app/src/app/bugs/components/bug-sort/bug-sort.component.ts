import { Component, EventEmitter, Output } from "@angular/core";

export interface BugSortEventArgs {
    attrName : string,
    desc : boolean
}

@Component({
    selector : 'app-bug-sort',
    templateUrl : 'bug-sort.component.html',
    styleUrls : ['bug-sort.component.css']
})
export class BugSortComponent{
    
    private _sortByAttrName : string = ''

    get sortByAttrName(): string {
        return this._sortByAttrName
    }

    set sortByAttrName(val : string){
        this._sortByAttrName = val
        this.sortChanged.emit({
            attrName : this.sortByAttrName,
            desc : this.sortByDesc
        })
    }

    private _sortByDesc : boolean = false;

    get sortByDesc() : boolean {
        return this._sortByDesc
    }

    set sortByDesc(val : boolean){
        this._sortByDesc = val
        this.sortChanged.emit({
            attrName: this.sortByAttrName,
            desc: this.sortByDesc
        })
    }

    @Output()
    public sortChanged: EventEmitter<BugSortEventArgs> = new EventEmitter<BugSortEventArgs>()


}