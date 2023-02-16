import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { BugOperationsService } from './bugs/services/bugOperations.service';
import { BugSortComponent } from './bugs/components/bug-sort/bug-sort.component';
import { BugApiService } from './bugs/services/bugApi.service';
import { AppConfig, AppConfiguration, App_Config_Token } from './environment/config';



@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    ElapsedPipe,
    ClosedCountPipe,
    BugsComponent,
    BugStatsComponent,
    BugSortComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    /* 
    BugOperationsService,
    BugApiService 
    */
   {provide : BugOperationsService, useClass : BugOperationsService},
   {provide : BugApiService, useClass : BugApiService},
   {provide : App_Config_Token, useValue : AppConfiguration}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
