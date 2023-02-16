import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig, App_Config_Token } from "src/app/environment/config";
import { Bug } from "../models/bug";

@Injectable()
export class BugApiService{


    constructor(
        @Inject(App_Config_Token) private appConfig : AppConfig,
        private httpClient : HttpClient
        ){
           
    }

    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>(this.appConfig.bugUrl)
            
    }

    save(bugData : Bug) :Observable<Bug> {
        if (bugData.id === 0) {
            return this.httpClient
                .post<Bug>(this.appConfig.bugUrl, bugData)
        } else {
            return this.httpClient
                .put<Bug>(`${this.appConfig.bugUrl}/${bugData.id}`, bugData)
        }
            
    }

    remove(bug: Bug): Observable<{}> {
        return this.httpClient
            .delete<{}>(`${this.appConfig.bugUrl}/${bug.id}`)
    }
}