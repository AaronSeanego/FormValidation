import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormValidation';
  formValidation;
  constructor(public formBuilder:FormBuilder){
    this.formValidation=formBuilder.group({
      name : ["",Validators.required]
    })
  }
}
