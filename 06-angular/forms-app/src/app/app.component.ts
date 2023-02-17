import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm! : FormGroup;

  constructor(private formBuilder : FormBuilder){

  }
  ngOnInit(){
    /* 
    this.myForm = new FormGroup({
      name : new FormControl('', {
        updateOn : 'blur',
        validators : [
          Validators.required,
          Validators.minLength(10)
        ]
      })
    }) 
    */

    this.myForm = this.formBuilder.group({
      name : ['Magesh', {
        updateOn : 'blur',
        validators : [
          Validators.required,
          Validators.minLength(10)
        ]
      }]
    })
  }

  onResetClick(){
    this.myForm.reset()
  }
}
