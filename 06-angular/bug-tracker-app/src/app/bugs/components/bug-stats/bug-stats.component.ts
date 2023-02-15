import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Bug } from "../../models/bug";

@Component({
    selector : 'app-bug-stats',
    templateUrl : 'bug-stats.component.html',
    styleUrls : ['bug-stats.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

    @Input('data')
    bugs : Bug[] = []

    getCurrentTime() : Date{
        return new Date()
    }
    
}