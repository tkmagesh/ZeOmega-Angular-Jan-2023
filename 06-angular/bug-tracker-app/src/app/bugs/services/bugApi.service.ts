import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { AppConfig, App_Config_Token } from "src/app/environment/config";
import { Bug } from "../models/bug";
import { BugOperationsService } from "./bugOperations.service";

@Injectable()
export class BugApiService{

   
    bugs$: Observable<Bug[]> = of([]);

    constructor(
        @Inject(App_Config_Token) private appConfig : AppConfig,
        private httpClient : HttpClient,
        private bugOperations : BugOperationsService
        ){
           
    }

    getAll(){
        this.bugs$ = this.httpClient
            .get<Bug[]>(this.appConfig.bugUrl)
            
    }

    save(bugData : Bug){
       /*  if (bugData.id === 0) {
            return this.httpClient
                .post<Bug>(this.appConfig.bugUrl, bugData)
                .subscribe(newBug => this.bugs = [...this.bugs, newBug])
        } else {
            return this.httpClient
                .put<Bug>(`${this.appConfig.bugUrl}/${bugData.id}`, bugData)
                .subscribe(updatedBug => this.bugs = this.bugs.map(bug => bug.id === bugData.id ? updatedBug : bug))
        } */
            
    }

    remove(bugToRemove: Bug) {
        /* return this.httpClient
            .delete<{}>(`${this.appConfig.bugUrl}/${bugToRemove.id}`)
            .subscribe(_ => this.bugs = this.bugs.filter(bug => bug.id != bugToRemove.id)) */
    }

    removeClosed() {
        /* this.bugs
            .filter(bug => bug.isClosed)
            .forEach(this.remove, this) */
    }

    toggle(bugToToggle : Bug){
      /*   const toggledBugData = this.bugOperations.toggle(bugToToggle)
        this.save(toggledBugData) */
    }
}