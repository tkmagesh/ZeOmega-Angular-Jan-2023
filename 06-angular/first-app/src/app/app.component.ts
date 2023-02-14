import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* state */
  title = 'first-app';

  constructor(){
   /* 
    setTimeout(() => {
      this.title = 'Brand New Angular App!'
    }, 5000); 
    */
  }

  onBtnChangeTitleClick(newTitle : string){
    // console.log(newTitle)
    this.title = newTitle
  }
}
