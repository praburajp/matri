import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private fb:FormBuilder) 
  {
    this.registerForm=this.fb.group({
      name:[""],
      email:[""],
      mobile:[""],
      gender:[""],
      bday:[""],
      birth_time:[""],
      caste:[""],
      sub_caste:[""],
    });
  }

  ngOnInit() {
  }

}
