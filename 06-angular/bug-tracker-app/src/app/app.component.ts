import { Component } from '@angular/core';
import { Bug } from './bugs/models/bug';
import { SortPipe } from './bugs/pipes/sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bug-tracker-app';

  constructor(){
 
  }
}


