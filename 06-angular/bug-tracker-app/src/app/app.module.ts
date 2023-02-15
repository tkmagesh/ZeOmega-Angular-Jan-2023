import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { BugOperationsService } from './bugs/services/bugOperations.service';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    ElapsedPipe,
    BugsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
